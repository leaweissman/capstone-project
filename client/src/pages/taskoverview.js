import KeyResult from '../components/okrcomponents/KeyResults/KeyResult';
import KanbanIssues from '../components/kanbancomponents/Issues/KanbanIssues';
import loadFromLocal from '../components/kanbancomponents/lib/loadFromLocal';
import styled from 'styled-components';


export default function TasksOverview() {
    const keyResult = loadFromLocal("okrKeyResult") || [];

    const kanbanIssues = loadFromLocal("issues") || [];



    return (
        <TaskBackgroundInStyle>
            <p>Welcome to Tasks</p>
            <h4>Here are your open Key Results:</h4>
            {keyResult.map((singleKeyResult) => {
                return <KeyResult keyResult={singleKeyResult} />
            })}
            <h4>Here are your tasks</h4>

            <KanbanIssues issues={kanbanIssues} />

        </TaskBackgroundInStyle>
    );
}

const TaskBackgroundInStyle = styled.div`
background-color: white;
border: solid 2px var(--primaryblue);
border-radius: 3rem;
padding: 2rem;
`
