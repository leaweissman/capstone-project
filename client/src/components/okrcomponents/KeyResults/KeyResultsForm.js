import { useState } from 'react';
import { v4 as uuid4 } from 'uuid';

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
            id: uuid4(),
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
                value={keyResult.title} />
            <button>Add my long term goals</button>
        </form>
    )
}