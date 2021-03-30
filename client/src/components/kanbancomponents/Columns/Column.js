import { v4 as uuid4 } from 'uuid';
import PropTypes from 'prop-types';
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
            <ButtonInStyle onClick={() => onDeleteMyColumn(column.id)}
            >Delete my Column</ButtonInStyle>
            <section>
                <KanbanIssues
                    showForm
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

Column.popTypes = {
    title: PropTypes.string,
    isDone: PropTypes.bool,
    onDeleteMyColumn: PropTypes.func,
    onAddIssueToColumn: PropTypes.func,
}

const Wrapper = styled.div`
text-align: center;
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
border-radius: 1rem;
margin: 1rem; 
padding: 0.8rem;
background-color: white;
`
const ColumnName = styled.h3`
text-align: left;
color: var(--primaryblue);
`
const ButtonInStyle = styled.button`
margin: 1rem;
border-radius: 1rem;
border: solid 1px var(--primaryblue);
color: var(--primaryblue);
background-color: white;
`
