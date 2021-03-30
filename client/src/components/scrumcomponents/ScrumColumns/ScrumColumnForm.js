import { useState } from 'react';
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

ScrumColumnForm.propTypes = {
    submitFunction: PropTypes.func,
}