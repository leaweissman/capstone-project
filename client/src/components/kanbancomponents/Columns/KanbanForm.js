import { useState } from 'react';
import { v4 as uuid4 } from 'uuid';


export default function KanbanForm({ submitFunction }) {
    const initialColumn = {
        column_name: '',
        issues: []
    }

    const [column, setColumn] = useState(initialColumn);


    const handleChange = (event) => {
        const field = event.target;
        const value = field.value;
        setColumn({
            ...column,
            [field.name]: value,
            id: uuid4(),
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