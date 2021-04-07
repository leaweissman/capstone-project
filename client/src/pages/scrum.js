import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Elementscrum from '../assets/1x/Elementscrum.png';
import styled from 'styled-components';
import ScrumColumn from '../components/scrumcomponents/ScrumColumns/ScrumColumn';
import ScrumColumnForm from '../components/scrumcomponents/ScrumColumns/ScrumColumnForm';
import loadFromLocal from '../lib/loadFromLocal';
import ScrumInfoTag from '../components/scrumcomponents/AboutScrum/ScrumInfoTag';
import ScrumInformation from '../components/scrumcomponents/AboutScrum/ScrumNavigation';
import walkingman from '../assets/walkingman.png';
import ScrumIcon from '../components/scrumcomponents/ScrumIcon';



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
            <IconInStyle>
                <ScrumIcon />
            </IconInStyle>
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

            <ButtonInStyle onClick={deleteColumns}>Delete All Columns</ButtonInStyle>
            <img src={walkingman} alt='' />
        </Wrapper>
    );

}

const Wrapper = styled.div`
background-image: url(${Elementscrum});
background-size: cover;
background-attachment: fixed;
width: 100%;
text-align: center;
`


const ButtonInStyle = styled.button`
color: #3C591E;
background-color:#B6CE91;
border-radius: .5rem;
border-color:#3C591E;
margin: .5rem;`

const IconInStyle = styled.div`
width: 10%;
margin-left: 45%;
padding-top: 1rem;`