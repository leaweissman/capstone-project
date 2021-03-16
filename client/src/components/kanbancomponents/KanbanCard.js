import styled from 'styled-components';

export default function KanbanCard({ column }) {
    console.log(column);
    return (
        <Wrapper>
            <h2>Kanban Card</h2>
            <h3>{column.column_name}</h3>
            <h3>{column.issue_name}</h3>
            <h3>{column.tasks}</h3>
            <h3>{column.urgency}</h3>
        </Wrapper>
    )
}


const Wrapper = styled.div`
text-align: center;
border: solid 2px var(--primarypink);
border-radius: 1rem;
margin: 1rem; 
padding: 0.8rem;
background-color: white;

`
/*<h2>{column.column_name}</h2>
            <h3>{column.issue_name}</h3>
            <h3>{column.tasks}</h3>
            <h3>{column.urgency}</h3>*/