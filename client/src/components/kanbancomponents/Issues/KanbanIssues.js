import { v4 as uuid4 } from 'uuid';
import styled from 'styled-components';

import IssueToDo from '../Issues/KanbanSingleIssue';
import KanbanIssueForm from '../Issues/KanbabIssuesForm';
import KanbanTask from '../Tasks/KanbanTask';

export default function KanbanIssues({ issueToDo, setIssueToDo, onAddIssueToColumn, column }) {

    function addIssueToDo(title) {
        const newIssueToDo = { title: title, isDone: false, id: uuid4() };
        onAddIssueToColumn(column.column_name, newIssueToDo)
        setIssueToDo([...issueToDo, newIssueToDo])
    }

    function deleteIssueToDo(idToDelete) {
        const allRemainingIssue = issueToDo.filter(
            (issue, id) => issue.id !== idToDelete)
        setIssueToDo(allRemainingIssue)
    }

    return (
        <SectionInStyle>
            {column && column?.issues?.map(({ title, id }) =>
                <span>
                    <IssueToDo
                        key={id}
                        title={title}
                        onDeleteIssue={() => deleteIssueToDo(id)} />
                    <KanbanTask />
                </span>
            )}
            <KanbanIssueForm onCreateIssueToDo={addIssueToDo} />


        </SectionInStyle>
    )
}


const SectionInStyle = styled.section`
border: 2px solid var(--primaryblue);
border-radius: 2rem;
padding: .5rem;
`

