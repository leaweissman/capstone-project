import Tag from '../kanbancomponents/KanbanTask';
import { useState } from 'react';


export default function KanbanForm({ submitFunction }) {
    const initialColumn = {
        column_name: '',
        issue_name: '',
        task: [],
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

    const addProductTag = (tag) => {
        //ich nehme alle sachen die im product drinnen sind und möchte ihnen einen neuen Tag hinzufügen (Tag sind tasks noch zu ändern!)
        setColumn({
            ...column,
            task: [...column.task, tag]
        })
    }
    function deleteTagFunction(tagToDelete) {
        const remainingTags = column.task.filter(
            (tag) => tag !== tagToDelete)
        setColumn({
            ...column,
            task: remainingTags
        })
    };
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
            <Tag
                onCreateTag={addProductTag}
                tags={column.task}
                onDeleteTagFunction={deleteTagFunction} />

            <section>
                <p>Urgency</p>
                <input
                    type='radio'
                    value={column.urgency}
                    name='urgency' />
                <p>Low</p>
                <input
                    type='radio'
                    value={column.urgency}
                    name='urgency' />
                <p>middle</p>
                <input
                    type='radio'
                    value={column.urgency}
                    name='urgency' />
                <p>high</p>
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
color: var(--primarypink);
` */
