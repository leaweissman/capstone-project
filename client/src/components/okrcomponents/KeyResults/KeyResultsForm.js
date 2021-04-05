import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
            <InputInStyle
                type='text'
                name='title'
                placeholder='E.g. Buying equiptment'
                onChange={handleChange}
                value={keyResult.title}
                keyResult={keyResult} />
            <ButtonInStyle>Add my Key Result!</ButtonInStyle>
        </form>
    )
}

KeyResultForm.propTypes = {
    submitFunction: PropTypes.func,
}

const ButtonInStyle = styled.button`
color: #E85D2F;
background-color:#FDD577;
border-radius: .5rem;
border-color:#E85D2F;
margin: .5rem;
padding: .25rem;`

const InputInStyle = styled.input`
border: none;
margin: 1rem;
`