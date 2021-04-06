import { v4 as uuid4 } from 'uuid';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import IssueHeadline from './IssueHeadline';
import KanbanIssueForm from '../Issues/KanbanIssuesForm';
import KanbanTask from '../Tasks/KanbanTask';

export default function KanbanIssues({ issues, setIssues, onAddIssueToColumn, column, addTask, showForm, showCheckbox }) {

    function addIssue(issue) {
        const newIssue = { ...issue, id: uuid4() };
        onAddIssueToColumn(column.id, newIssue)
    }

    function deleteIssue(idToDelete) {
        const allRemainingIssue = issues.filter(
            (issue) => issue.id !== idToDelete)
        setIssues(allRemainingIssue)
    }

    function updateTaskForIssue(taskToUpdate, issueId) {
        const updatedIssues = issues.map(issue => {
            if (issue.id === issueId) {
                issue.tasks = issue.tasks.map(task => {
                    if (task.id === taskToUpdate.id) {
                        task.isDone = taskToUpdate.isDone
                    }

                    return task;
                });
            }
            return issue;
        })
        setIssues(updatedIssues)
    }

    function updateIssues(issueId, updatedTasks) {
        const updatedIssues = issues.map(issue => {
            if (issue.id === issueId) {
                issue.tasks = updatedTasks
            }
            return issue
        })
        setIssues(updatedIssues)
    }


    return (
        <SectionInStyle>
            {issues?.map((issue) =>
                <span key={issue.id}>
                    <IssueHeadline
                        title={issue.title}
                        onDeleteIssue={() => deleteIssue(issue.id)} />
                    <KanbanTask
                        showForm={showForm}
                        showCheckbox={showCheckbox}
                        issue={issue}
                        issues={issues}
                        setIssues={setIssues}
                        addTask={addTask}
                        updateTaskForIssue={updateTaskForIssue}
                        updateIssues={updateIssues} />
                </span>
            )}
            {showForm && <KanbanIssueForm submitIssueFunction={addIssue} />}
        </SectionInStyle>
    )
}

KanbanIssues.propTypes = {
    setIssues: PropTypes.func,
    onAddIssueToColumn: PropTypes.func,
    addTask: PropTypes.func,
    showCheckbox: PropTypes.func,
}

const SectionInStyle = styled.section`
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
border-radius: 2rem;
padding: .5rem;
color: white;
background-color:#D6846B;
`

