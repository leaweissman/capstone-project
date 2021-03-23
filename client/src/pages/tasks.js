import styled from 'styled-components';
import Task from '../components/kanbancomponents/Tasks/Task';
import KeyResult from '..//components/okrcomponents/KeyResults/KeyResult';

export default function Tasks(keyResult) {
    return (
        <TaskBackgroundInStyle>
            <p>Welcome to Tasks</p>
            <p>Here are your task which need to be done</p>
            <Task />
            <p>KeyResults</p>
            <KeyResult keyResult={keyResult} />
        </TaskBackgroundInStyle>
    );
}

const TaskBackgroundInStyle = styled.div`
background-color: white;
border: solid 2px var(--primaryblue);
border-radius: 3rem;
padding: 2rem;
`
