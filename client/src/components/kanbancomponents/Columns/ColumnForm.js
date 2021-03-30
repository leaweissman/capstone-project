import { useState } from 'react';
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
                Column Name:
            <input
                    type='text'
                    name='column_name'
                    placeholder='Column Name'
                    onChange={handleChange}
                    value={column.column_name} />
            </label>
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}

ColumnForm.propTypes = {
    submitFunction: PropTypes.func,
}