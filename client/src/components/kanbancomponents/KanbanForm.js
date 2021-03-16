import { useState } from 'react';


export default function KanbanForm({ submitFunction }) {
    const initialColumn = {
        column_name: '',
        issue_name: '',
        task: '',
        urgency: ''
    }

    const [column, setColumn] = useState(initialColumn);


    //console.log(column)
    //console.log(columns)

    const handleChange = (event) => {
        const field = event.target; //wo ich es eingebe
        const value = field.value; //was ich eingebe, in value soeichere ich das rein was ich eingegeben habe
        setColumn({
            ...column,
            [field.name]: value //um das in den namen einzuspeichern
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
            <input
                type='text'
                name='issue_name'
                placeholder='Issue Name'
                onChange={handleChange}
                value={column.issue_name} />
            <p>add your tasks</p>
            <input
                type='text'
                name='task'
                placeholder='add your task'
                onChange={handleChange}
                value={column.tasks} />
            <button>add to task list!</button>
            {/* <KanbanTask title="create a Task" isDone="false" /> */}
            <section>
                <input type='radio' value={column.urgency} />
                <input type='radio' value={column.urgency} />
                <input type='radio' value={column.urgency} />
            </section>
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}


/* const noUrgency = styled.input`
color: var(--primarygreen);
`
const semiUrgency = styled.input`
color: var(--primaryorange);
`
const highUrgency = styled.input`
color: var(--primarpink);
` */
