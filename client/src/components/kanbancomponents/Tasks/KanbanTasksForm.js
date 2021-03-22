import { useState } from 'react';

export default function KanbanTasksForm({ submitTaskFunction }) {
    const initialTask = {
        title: ''
    }

    const [task, setTask] = useState(initialTask)

    const handleChange = (event) => {
        event.preventDefault();
        const field = event.target;
        const value = field.value;
        setTask({
            ...task,
            [field.name]: value
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
                value={task.title} />
            <button onSubmit={handleSubmit} >Add task</button>
        </form>
    )
}