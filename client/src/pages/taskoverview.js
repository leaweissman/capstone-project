import KeyResult from '../components/okrcomponents/KeyResults/KeyResult';
import KanbanIssues from '../components/kanbancomponents/Issues/KanbanIssues';
import loadFromLocal from '../components/lib/loadFromLocal';
import styled from 'styled-components';
import ScrumIssues from '../components/scrumcomponents/ScrumIssues/ScrumIssue';

export default function TasksOverview() {
    const keyResult = loadFromLocal("okrKeyResult") || [];

    const kanbanIssues = loadFromLocal("issues") || [];

    const scrumIssues = loadFromLocal("scrumissues") || [];



    return (
        <div>
            <TaskBackgroundInStyle>Welcome to Tasks</TaskBackgroundInStyle>
            <TaskBackgroundInStyle>
                <h4>Here are your open Key Results:</h4>
                {keyResult.map((singleKeyResult) => {
                    return <KeyResult keyResult={singleKeyResult} />
                })}
            </TaskBackgroundInStyle>
            <TaskBackgroundInStyle>
                <h4>Here are your Kanbantasks</h4>

                <KanbanIssues issues={kanbanIssues} />
            </TaskBackgroundInStyle>

            <TaskBackgroundInStyle>
                <h4>Here are your Scrum Tasks</h4>

                <ScrumIssues issues={scrumIssues} />
            </TaskBackgroundInStyle>
        </div>
    );
}

const TaskBackgroundInStyle = styled.div`
background-color: white;
border-radius: 3rem;
padding: 2rem;
margin: 2rem;
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`
