import { useState } from 'react';
import { v4 as uuid4 } from 'uuid';

export default function KanbanTasksForm({ submitTaskFunction }) {
    const initialTask = {
        task_name: ''
    }

    const [task, setTask] = useState(initialTask)

    const handleChange = (event) => {
        event.preventDefault();
        const field = event.target;
        const value = field.value;
        setTask({
            ...task,
            [field.name]: value,
            id: uuid4(),
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        submitTaskFunction(task)
        setTask(initialTask)

    }
    return (
        <form className='form'>
            <h3>add further tasks</h3>
            <input
                name='title'
                type='text'
                placeholder='Anything else to do?'
                onChange={handleChange}
                value={task.task_name} />
            <button onSubmit={handleSubmit} >Add task</button>
        </form>
    )
}