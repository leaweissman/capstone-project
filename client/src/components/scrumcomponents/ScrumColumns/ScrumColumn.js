import { v4 as uuid4 } from 'uuid';
import PropTypes from 'prop-types';
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
            <button onClick={() => onDeleteMyColumn(column.id)}
            >Delete my Column</button>
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
ScrumColumn.propTypes = {
    column: PropTypes.object,
    onDeleteMyColumn: PropTypes.func,
    issues: PropTypes.object,
    setIssues: PropTypes.object,
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
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
text-align: left;
`
