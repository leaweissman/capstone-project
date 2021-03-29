import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import ScrumColumn from '../components/scrumcomponents/ScrumColumns/ScrumColumn';
import ScrumColumnForm from '../components/scrumcomponents/ScrumColumns/ScrumColumnForm';
import loadFromLocal from '../components/kanbancomponents/lib/loadFromLocal';
import ScrumInfoTag from '../components/scrumcomponents/AboutScrum/ScrumInfoTag';
import ScrumInformation from '../components/scrumcomponents/AboutScrum/ScrumNavigation';



export default function Scrum() {
    const LOCAL_STORAGE_KEY_SCRUM_COLUMN = 'scrumcolumn'
    const LOCAL_STORAGE_KEY_SCRUM_ISSUE = 'scrumissues'

    const [columns, setColumns] = useState(loadFromLocal(LOCAL_STORAGE_KEY_SCRUM_COLUMN) ?? []);
    const [issues, setIssues] = useState(loadFromLocal(LOCAL_STORAGE_KEY_SCRUM_ISSUE) ?? []);


    const addColumn = (column) =>
        setColumns([...columns, { ...column, id: uuidv4() }]);

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


    function addIssueToColumn(columnId, issue) {
        issue.columnId = columnId;
        setIssues([...issues, issue]);
    }

    return (
        <Wrapper>
            <ScrumHeader>Welcome to Scrum</ScrumHeader>
            <ScrumInfoTag />
            <ScrumInformation />
            <ScrumColumnForm submitFunction={addColumn} />
            {columns && columns.map((column) => (
                <ScrumColumn
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
border: solid 2px var(--primarypink);
border-radius: 1rem;
margin: 1rem; 
padding: 0.8rem;
`

const ScrumHeader = styled.h1`
color: white;
position:center;`