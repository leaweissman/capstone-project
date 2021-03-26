import { useEffect, useState } from 'react';
import styled from 'styled-components';
import loadFromLocal from '../components/kanbancomponents/lib/loadFromLocal';
import Column from '../components/kanbancomponents/Columns/Column';
import ColumnForm from '../components/kanbancomponents/Columns/ColumnForm';
import ScrumInfoTag from '../components/scrumcomponents/AboutScrum/ScrumInfoTag';
import ScrumNavigation from '../components/scrumcomponents/AboutScrum/ScrumNavigation';



export default function Scrum() {
    const LOCAL_STORAGE_KEY_SCRUM_COLUMN = 'scrumcolumn'
    const LOCAL_STORAGE_KEY_SCRUM_ISSUE = 'scrumissue'
    const [columns, setColumns] = useState(loadFromLocal(LOCAL_STORAGE_KEY_SCRUM_COLUMN) ?? []);
    const [issues, setIssues] = useState(loadFromLocal(LOCAL_STORAGE_KEY_SCRUM_ISSUE) ?? []);

    const addColumn = (column) =>
        setColumns([...columns, column]);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_SCRUM_COLUMN, JSON.stringify(columns))
    }, [columns])


    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_SCRUM_ISSUE, JSON.stringify(issues))
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

    return (
        <Wrapper>
            <KanbanHeader>Welcome to Scrum</KanbanHeader>
            <ScrumInfoTag />
            <ScrumNavigation />
            <ColumnForm submitFunction={addColumn} />
            {columns.map((column) => (
                <Column
                    column={column}
                    issues={issues}
                    setIssues={setIssues}
                    onDeleteMyColumn={deleteMyColumn}
                    onAddIssueToColumn={addIssueToColumn} />
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