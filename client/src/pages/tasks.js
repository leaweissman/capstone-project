import KeyResult from '../components/okrcomponents/KeyResults/KeyResult';
import IssueHeadline from '../components/kanbancomponents/Issues/IssueHeadline';
import loadFromLocal from '../components/kanbancomponents/lib/loadFromLocal';
import styled from 'styled-components';


export default function Tasks() {
    const keyResult = loadFromLocal("okrKeyResult") || [];

    const kanbanIssue = loadFromLocal("issues") || [];
    console.log(kanbanIssue)


    return (
        <TaskBackgroundInStyle>
            <p>Welcome to Tasks</p>
            <h4>Here are your open Key Results:</h4>
            {keyResult.map((singleKeyResult) => {
                return <KeyResult keyResult={singleKeyResult} />
            })}
            <h4>Here are your tasks</h4>
            {kanbanIssue.map((singleIssue) => {
                return <IssueHeadline issue={singleIssue} />
            })}
        </TaskBackgroundInStyle>
    );
}

const TaskBackgroundInStyle = styled.div`
background-color: white;
border: solid 2px var(--primaryblue);
border-radius: 3rem;
padding: 2rem;
`
