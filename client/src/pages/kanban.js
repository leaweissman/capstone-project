import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Elementkanban from '../assets/1x/Elementkanban.png';
import womansitting from '../assets/womansitting.png';
import styled from 'styled-components';
import loadFromLocal from '../components/lib/loadFromLocal';
import Column from '../components/kanbancomponents/Columns/Column';
import KanbanInfoTag from '../components/kanbancomponents/Detailpages/KanbanInfo';
import KanbanInformation from '../components/kanbancomponents/Detailpages/KanbanNavigation';
import ColumnForm from '../components/kanbancomponents/Columns/ColumnForm';
import KanbanIcon from '../components/kanbancomponents/KanbanIcon';

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
            <IconInStyle>
                <KanbanIcon />
            </IconInStyle>
            <KanbanInfoTag />
            <img src={womansitting} alt='' />
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

            <ButtonInStyle onClick={deleteColumns}>Delete All Columns</ButtonInStyle>
        </Wrapper>
    );

}

const Wrapper = styled.div`
text-align: center;
background-image: url(${Elementkanban});
background-size: cover;
background-attachment: fixed;
`


const ButtonInStyle = styled.button`
color: white;
background-color:#D6846B;
border-radius: .5rem;
border-color:#AB3E1D;
padding: .1rem;
margin: 1rem;`


const IconInStyle = styled.div`
width: 30%;
margin-left: 35%;
padding-top: 1rem;`