import { useState } from 'react';

export default function KanbanTasksForm({ issue, submitTask }) {
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
        submitTask(issue.id, task)
        setTask(initialTask)

    }
    return (
        <form className='form' onSubmit={handleSubmit}>
            <h3>add further tasks</h3>
            <input
                name='title'
                type='text'
                placeholder='Anything else to do?'
                onChange={handleChange}
                value={task.title}
                task={task} />
            <button >Add task</button>
        </form>
    )
}