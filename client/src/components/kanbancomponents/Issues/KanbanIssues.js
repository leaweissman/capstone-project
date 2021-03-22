import { v4 as uuid4 } from 'uuid';
import styled from 'styled-components';

import IssueHeadline from './IssueHeadline';
import KanbanIssueForm from '../Issues/KanbanIssuesForm';
import KanbanTask from '../Tasks/KanbanTask';

export default function KanbanIssues({ issues, setIssues, onAddIssueToColumn, column, setTaskToDo, taskToDo, onAddTaskToDo }) {

    function addIssue(issue) {
        const newIssue = { ...issue, id: uuid4() };
        onAddIssueToColumn(column.column_name, newIssue)
        setIssues([...issues, newIssue])
    }

    function deleteIssueToDo(idToDelete) {
        const allRemainingIssue = issues.filter(
            (issue, id) => issue.id !== idToDelete)
        setIssues(allRemainingIssue)
    }

    return (
        <SectionInStyle>
            {column && column?.issues?.map(({ title, id }) =>
                <span>
                    <IssueHeadline
                        key={id}
                        title={title}
                        onDeleteIssue={() => deleteIssueToDo(id)} />
                    <KanbanTask
                        issues={issues}
                        taskToDo={taskToDo}
                        setTaskToDo={setTaskToDo}
                        onAddTaskToDo={onAddTaskToDo} />
                </span>
            )}
            <KanbanIssueForm submitIssueFunction={addIssue} />
        </SectionInStyle>
    )
}


const SectionInStyle = styled.section`
border: 2px solid var(--primaryblue);
border-radius: 2rem;
padding: .5rem;
`

