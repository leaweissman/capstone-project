import { useEffect, useState } from 'react';
import styled from 'styled-components';
import loadFromLocal from '../components/kanbancomponents/lib/loadFromLocal';
import KanbanCard from '../components/kanbancomponents/Columns/KanbanCard';
import KanbanForm from '../components/kanbancomponents/Columns/KanbanForm';
import KanbanInfoTag from '../components/kanbancomponents/KanbanInfo';
import KanbanInformation from '../components/kanbancomponents/KanbanNavigation';


export default function Kanban() {
    const LOCAL_STORAGE_KEY_KANBAN_COLUMN = 'kanbancolumn'
    const LOCAL_STORAGE_KEY_KANBAN_ISSUE = 'issueToBeDone'
    const [columns, setColumns] = useState(loadFromLocal(LOCAL_STORAGE_KEY_KANBAN_COLUMN) ?? []);
    const [issueToDo, setIssueToDo] = useState(loadFromLocal(LOCAL_STORAGE_KEY_KANBAN_ISSUE) ?? []);



    const addColumn = (column) =>
        setColumns([...columns, column]);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_KANBAN_COLUMN, JSON.stringify(columns))
    }, [columns])


    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_KANBAN_ISSUE, JSON.stringify(issueToDo))
    }, [issueToDo])

    function deleteColumns() {
        setColumns([]);
    }

    function deleteMyColumn(idToDelete) {
        const allRemainingColumns = columns.filter(
            (column) => column.id !== idToDelete)
        setColumns(allRemainingColumns)
    }


    function addIssueToColumn(columnName, issue) {
        console.log(columnName)
        const columnToUpdate = columns.find(column => column.column_name === columnName)
        columnToUpdate.issues.push(issue)
        setColumns([...columns, columnToUpdate])

    }

    return (
        <Wrapper>
            <button onClick={deleteColumns}>Delete All Column</button>
            <KanbanHeader>Welcome to Kanban</KanbanHeader>
            <KanbanInfoTag />
            <KanbanInformation />
            <KanbanForm submitFunction={addColumn} />
            {columns.map((column) => (
                <KanbanCard
                    column={column}
                    issueToDo={issueToDo}
                    setIssueToDo={setIssueToDo}
                    onDeleteMyColumn={deleteMyColumn}
                    onAddIssueToColumn={addIssueToColumn} />
            ))}

        </Wrapper>
    );

}

const Wrapper = styled.div`
text-align: center;
border: solid 2px var(--primarypink);
border-radius: 1rem;
margin: 1rem; 
padding: 0.8rem;
`

const KanbanHeader = styled.h1`
color: white;
position:center;`