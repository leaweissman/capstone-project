import { v4 as uuid4 } from 'uuid';
import styled from 'styled-components';
import KanbanIssues from '../Issues/KanbanIssues';


export default function Column({ column, onDeleteMyColumn, issues, setIssues, onAddIssueToColumn }) {

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
            <button onClick={() => onDeleteMyColumn(column.id)}
            >Delete my Column</button>
            <section>
                <KanbanIssues
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
border: solid 2px var(--primarypink);
border-radius: 1rem;
margin: 1rem; 
padding: 0.8rem;
background-color: white;
`
const ColumnName = styled.h3`
color: var(--primaryblue);
text-align: left;
`
