import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function ScrumTaskForm({ issue, submitTask }) {
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
            <AddInStyle>add further tasks</AddInStyle>
            <InputInStyle
                name='title'
                type='text'
                placeholder='Anything else to do?'
                onChange={handleChange}
                value={task.title}
                task={task} />
            <ButtonInStyle >+</ButtonInStyle>
        </form>
    )
}

ScrumTaskForm.propTypes = {
    issue: PropTypes.object,
    submitTask: PropTypes.func,
}
const ButtonInStyle = styled.button`
color: #3C591E;
background-color:#B6CE91;
border-radius: .5rem;
border-color:#3C591E;
margin: .5rem;`

const InputInStyle = styled.input`
border: none;
margin: 1rem;
`

const AddInStyle = styled.p`
margin: 0;`
