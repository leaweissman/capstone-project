import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Task({ title, isDone = false, onToggleTask, onDeleteTask, showCheckbox, showDelete }) {
    return (
        <TaskInStyle>
            {showCheckbox && <input type='checkbox' checked={isDone} onChange={onToggleTask} />}
            {title}
            {showDelete && <DeleteInStyle onClick={onDeleteTask}> &times;</DeleteInStyle>}
        </TaskInStyle>
    )
}

Task.propTypes = {
    title: PropTypes.string,
    isDone: PropTypes.bool,
    onToggleTask: PropTypes.func,
    onDeleteTask: PropTypes.func,
}

const TaskInStyle = styled.section`
text-align: left;
margin: .3rem;`

const DeleteInStyle = styled.span`
color: white;

`