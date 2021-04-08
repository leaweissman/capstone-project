import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
            <InputInStyle
                name='title'
                type='text'
                placeholder='Anything else to do?'
                onChange={handleChange}
                value={task.title}
                task={task} />
            <ButtonInStyle>+</ButtonInStyle>
        </form>
    )
}

KanbanTasksForm.propTypes = {
    submitTask: PropTypes.func,
}

const ButtonInStyle = styled.button`
color: white;
background-color:#D6846B;
border-radius: .5rem;
border-color:#AB3E1D;
padding: .1rem;
margin: 1rem;`

const InputInStyle = styled.input`
border: none;
`