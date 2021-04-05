import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function ScrumTaskHeadline({ title, isDone = false, onToggleTask, onDeleteTask }) {
    return (
        <TaskInStyle>
            <input type='checkbox' checked={isDone} onChange={onToggleTask} />
            {title}
            <DeleteInStyle onClick={onDeleteTask}> &times;</DeleteInStyle>
        </TaskInStyle>
    )
}
const TaskInStyle = styled.section`
text-align: left;
margin: .3rem;`

const DeleteInStyle = styled.span`
color: white;

`

ScrumTaskHeadline.propTypes = {
    title: PropTypes.string,
    isDone: PropTypes.bool,
    onToggleTask: PropTypes.func,
    onDeleteTask: PropTypes.func,
}