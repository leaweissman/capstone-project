import { useEffect, useState } from 'react';
import styled from 'styled-components';
import loadFromLocal from '../components/kanbancomponents/lib/loadFromLocal';
import Column from '../components/kanbancomponents/Columns/Column';
import KanbanInfoTag from '../components/kanbancomponents/Detailpages/KanbanInfo';
import KanbanInformation from '../components/kanbancomponents/Detailpages/KanbanNavigation';
import ColumnForm from '../components/kanbancomponents/Columns/ColumnForm';


export default function Kanban() {
    const LOCAL_STORAGE_KEY_KANBAN_COLUMN = 'kanbancolumn'
    const LOCAL_STORAGE_KEY_KANBAN_ISSUE = 'issueToBeDone'
    const [columns, setColumns] = useState(loadFromLocal(LOCAL_STORAGE_KEY_KANBAN_COLUMN) ?? []);
    const [issues, setIssues] = useState(loadFromLocal(LOCAL_STORAGE_KEY_KANBAN_ISSUE) ?? []);

    const addColumn = (column) =>
        setColumns([...columns, column]);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_KANBAN_COLUMN, JSON.stringify(columns))
    }, [columns])


    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_KANBAN_ISSUE, JSON.stringify(issues))
    }, [issues])


    function deleteColumns() {
        setColumns([]);
    }

    function deleteMyColumn(idToDelete) {
        const allRemainingColumns = columns.filter(
            (column) => column.id !== idToDelete)
        setColumns(allRemainingColumns)
    }


    function addIssueToColumn(columnName, issue) {
        const updatedColumns = columns.map(column => {
            if (column.column_name === columnName) {
                column.issues.push(issue);
            }
            return column;
        });
        setColumns(updatedColumns)
    }

    function updateColumns(columnName, updatedIssues) {
        const updatedColumns = columns.map(column => {
            if (column.column_name === columnName) {
                column.issues = updatedIssues;
            }
            return column;
        });
        setColumns(updatedColumns)
    }

    return (
        <Wrapper>
            <KanbanHeader>Welcome to Kanban</KanbanHeader>
            <KanbanInfoTag />
            <KanbanInformation />
            <ColumnForm submitFunction={addColumn} />
            {columns && columns.map((column) => (
                <Column
                    column={column}
                    issues={issues}
                    setIssues={setIssues}
                    onDeleteMyColumn={deleteMyColumn}
                    onAddIssueToColumn={addIssueToColumn}
                    key={column?.id}
                    updateColumns={updateColumns} />


            ))}

            <button onClick={deleteColumns}>Delete All Columns</button>
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