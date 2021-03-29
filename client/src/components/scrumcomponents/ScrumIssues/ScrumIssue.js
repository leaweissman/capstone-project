import { v4 as uuid4 } from 'uuid';
import styled from 'styled-components';

import ScrumIssueHeadline from './ScrumIssueHeadline';
import ScrumIssueForm from '../ScrumIssues/ScrumIssueForm';
import ScrumTask from '../ScrumTasks/ScrumTask';

export default function ScrumIssues({ issues, setIssues, onAddIssueToColumn, column, addTask }) {

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
                    <ScrumIssueHeadline
                        title={issue.title}
                        onDeleteIssue={() => deleteIssue(issue.id)} />
                    <ScrumTask
                        issue={issue}
                        issues={issues}
                        setIssues={setIssues}
                        addTask={addTask}
                        updateTaskForIssue={updateTaskForIssue}
                        updateIssues={updateIssues} />
                </span>
            )}
            <ScrumIssueForm submitIssueFunction={addIssue} />
        </SectionInStyle>
    )
}


const SectionInStyle = styled.section`
border: 2px solid var(--primaryblue);
border-radius: 2rem;
padding: .5rem;
`

