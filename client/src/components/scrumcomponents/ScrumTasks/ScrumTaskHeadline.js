import styled from 'styled-components';

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
color: var(--primarypink);

`