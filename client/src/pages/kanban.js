import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import loadFromLocal from '../components/lib/loadFromLocal';
import Column from '../components/kanbancomponents/Columns/Column';
import KanbanInfoTag from '../components/kanbancomponents/Detailpages/KanbanInfo';
import KanbanInformation from '../components/kanbancomponents/Detailpages/KanbanNavigation';
import ColumnForm from '../components/kanbancomponents/Columns/ColumnForm';


export default function Kanban() {
    const LOCAL_STORAGE_KEY_KANBAN_COLUMN = 'kanbancolumn'
    const LOCAL_STORAGE_KEY_KANBAN_ISSUE = 'issues'

    const [columns, setColumns] = useState(loadFromLocal(LOCAL_STORAGE_KEY_KANBAN_COLUMN) ?? []);
    const [issues, setIssues] = useState(loadFromLocal(LOCAL_STORAGE_KEY_KANBAN_ISSUE) ?? []);


    const addColumn = (column) =>
        setColumns([...columns, { ...column, id: uuidv4() }]);

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


    function addIssueToColumn(columnId, issue) {
        issue.columnId = columnId;
        setIssues([...issues, issue]);
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
                    issues={issues.filter(issue => issue.columnId === column.id)}
                    setIssues={setIssues}
                    onDeleteMyColumn={deleteMyColumn}
                    onAddIssueToColumn={addIssueToColumn}
                    key={column?.id}
                />
            ))}

            <button onClick={deleteColumns}>Delete All Columns</button>
        </Wrapper>
    );

}

const Wrapper = styled.div`
text-align: center;
border-radius: 1rem;
margin: 1rem; 
padding: 0.8rem;
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`

const KanbanHeader = styled.h1`
color: white;
position:center;`