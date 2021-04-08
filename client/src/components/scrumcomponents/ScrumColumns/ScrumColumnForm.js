import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


export default function ScrumColumnForm({ submitFunction }) {
    const initialColumn = {
        column_name: '',
    }

    const [column, setColumn] = useState(initialColumn);

    const handleChange = (event) => {
        const field = event.target;
        const value = field.value;
        setColumn({
            ...column,
            [field.name]: value
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        submitFunction(column)
        setColumn(initialColumn)
    }

    return (
        <form className='form'>
            <label>
                Column Name:
            <InputInStyle
                    type='text'
                    name='column_name'
                    placeholder='Column Name'
                    onChange={handleChange}
                    value={column.column_name} />
            </label>
            <ButtonInStyle onClick={handleSubmit}>+</ButtonInStyle>
        </form>
    )
}

ScrumColumnForm.propTypes = {
    submitFunction: PropTypes.func,
}
const InputInStyle = styled.input`
border: none;
margin: 1rem;
`

const ButtonInStyle = styled.button`
color: #3C591E;
background-color:#B6CE91;
border-radius: .5rem;
border-color:#3C591E;
margin: .5rem;`
