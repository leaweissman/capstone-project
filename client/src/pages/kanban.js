import { useEffect, useState } from 'react';
import styled from 'styled-components';
import loadFromLocal from '../lib/loadFromLocal';
import KanbanCard from '../components/kanbancomponents/KanbanCard';
import KanbanForm from '../components/kanbancomponents/KanbanForm';
import KanbanInfoTag from '../components/kanbancomponents/KanbanInfo';
import KanbanInformation from '../components/kanbancomponents/KanbanNavigation';


export default function Kanban() {
    const LOCAL_STORAGE_KEY = 'kanbantasks'
    const [columns, setColumns] = useState(loadFromLocal(LOCAL_STORAGE_KEY) ?? []);


    const addColumn = (column) =>
        setColumns([...columns, column]);

    console.log(columns)

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(columns))
    }, [columns])


    return (
        <Wrapper>
            <KanbanHeader>Welcome to Kanban</KanbanHeader>
            <KanbanInfoTag />
            <KanbanInformation />
            <KanbanForm submitFunction={addColumn} />
            {columns.map((column) => (
                <KanbanCard column={column} />
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
color: white;`
