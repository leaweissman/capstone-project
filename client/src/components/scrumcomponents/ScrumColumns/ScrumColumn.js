import { v4 as uuid4 } from 'uuid';
import styled from 'styled-components';
import ScrumIssue from '../ScrumIssues/ScrumIssue';


export default function ScrumColumn({ column, onDeleteMyColumn, issues, setIssues, onAddIssueToColumn }) {

    function addTask(issueId, task) {
        const newTask = { title: task.title, isDone: false, id: uuid4() };
        addTaskToIssue(issueId, newTask)
    }

    function addTaskToIssue(issueId, task) {
        const updatedIssues = issues.map(issue => {
            if (issue.id === issueId) {
                issue.tasks.push(task)
            }
            return issue;
        })
        setIssues(updatedIssues)
    }

    return (
        <Wrapper>
            <ColumnName>{column.column_name}</ColumnName>
            <ButtonInStyle onClick={() => onDeleteMyColumn(column.id)}
            >Delete my Column</ButtonInStyle>
            <section>
                <ScrumIssue
                    showScrumForm
                    column={column}
                    issues={issues}
                    setIssues={setIssues}
                    onAddIssueToColumn={onAddIssueToColumn}
                    addTask={addTask}
                    addTaskToIssue={addTaskToIssue} />
            </section>
        </Wrapper>
    )
}


const Wrapper = styled.div`
text-align: center;
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
border-radius: 1rem;
margin: 1rem; 
padding: 0.8rem;
background-color: #3C591E;
`
const ColumnName = styled.h3`
text-align: left;
`
const ButtonInStyle = styled.button`
color: #3C591E;
background-color:#B6CE91;
border-radius: .5rem;
border-color:#3C591E;
margin: .5rem;`
