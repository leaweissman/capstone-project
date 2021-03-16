import { useState } from 'react';
import styled from 'styled-components';
import KanbanCard from '../components/kanbancomponents/KanbanCard';
import KanbanForm from '../components/kanbancomponents/KanbanForm';
import KanbanInfoTag from '../components/kanbancomponents/KanbanInfo';


export default function Kanban() {
    const [columns, setColumns] = useState([]);

    const addColumn = (column) =>
        setColumns([...columns, column]);

    console.log(columns)


    return (
        <Wrapper>
            <KanbanHeader>Welcome to Kanban</KanbanHeader>
            <KanbanInfoTag />
            <button>show me more!</button>

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
