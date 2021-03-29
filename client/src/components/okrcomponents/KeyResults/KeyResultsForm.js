import { useState } from 'react';
export default function KeyResultForm({ submitFunction }) {

    const initialKeyResult = {
        title: '',
    };

    const [keyResult, setKeyResult] = useState(initialKeyResult);

    const handleChange = (event) => {
        event.preventDefault();
        const field = event.target;
        const value = field.value;
        setKeyResult({
            ...keyResult,
            [field.name]: value,
        });
    }

    function submitKeyResult(event) {
        event.preventDefault();
        submitFunction(keyResult)
        setKeyResult(initialKeyResult)
    }

    return (
        <form className='form' onSubmit={submitKeyResult}>
            <input
                type='text'
                name='title'
                placeholder='E.g. Buying equiptment'
                onChange={handleChange}
                value={keyResult.title}
                keyResult={keyResult} />
            <button>Add my Key Result!</button>
        </form>
    )
}