import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import isValidColumnForm from '../../lib/ValidateFunction';

export default function ColumnForm({ submitFunction }) {
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
        if (isValidColumnForm(column)) {
            submitFunction(column)
            setColumn(initialColumn)
        } else { alert('Dein Column muss mehr als 1 Buchstaben haben') }
    }

    return (
        <form className='form'>
            <label>

                <InputInStyle
                    type='text'
                    name='column_name'
                    placeholder='Column Name'
                    onChange={handleChange}
                    value={column.column_name} />
            </label>
            <ButtonInStyle onClick={handleSubmit}>Submit</ButtonInStyle>
        </form>
    )
}

ColumnForm.propTypes = {
    submitFunction: PropTypes.func,
}


const InputInStyle = styled.input`
border: none;
margin: 1rem;
`
const ButtonInStyle = styled.button`
border-radius: 1rem;
border: none;
`

