import KeyResult from '../components/okrcomponents/KeyResults/KeyResult';
import KanbanIssues from '../components/kanbancomponents/Issues/KanbanIssues';
import loadFromLocal from '../components/lib/loadFromLocal';
import styled from 'styled-components';
import ScrumIssues from '../components/scrumcomponents/ScrumIssues/ScrumIssue';
import toDoIcon from '../assets/toDoIcon.svg';


export default function TasksOverview() {
    const keyResult = loadFromLocal("okrKeyResult") || [];

    const kanbanIssues = loadFromLocal("issues") || [];

    const scrumIssues = loadFromLocal("scrumissues") || [];



    return (
        <div>
            <ToDoInStyle src={toDoIcon} alt='' />
            <KeyResultsInStyle>
                <p>Here are your open Key Results:</p>
                {keyResult.map((singleKeyResult) => {
                    return <KeyResult keyResult={singleKeyResult} />
                })}
            </KeyResultsInStyle>
            <KanbanInStyle>
                <p>Here are your Kanbantasks</p>

                <KanbanIssues issues={kanbanIssues} />
            </KanbanInStyle>

            <ScrumInStyle>
                <p>Here are your Scrum Tasks</p>

                <ScrumIssues issues={scrumIssues} />
            </ScrumInStyle>
        </div>
    );
}

const ToDoInStyle = styled.img`
margin-top: 1rem;
width: 10%;
margin-left: 45%;
`

const KeyResultsInStyle = styled.div`
background-color: #F09939;
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
border-radius: 1rem; 
padding: .5rem;
margin: 2rem;
`
const KanbanInStyle = styled.div`
background-color: #AB3E1D;
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
border-radius: 1rem; 
padding: 1rem;
margin: 2rem;
`
const ScrumInStyle = styled.div`
background-color: #3C591E;
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
border-radius: 1rem; 
padding: 1rem;
margin: 2rem;
`
