import styled from 'styled-components';
import KanbanIssues from '../kanbancomponents/Issues/KanbanIssues';


export default function KanbanCard({ column }) {


    return (
        <Wrapper>
            <ColumnName>{column.column_name}</ColumnName>
            <section>
                <KanbanIssues />
                <UrgencyInStyle>{column.urgency} urgency:</UrgencyInStyle>
            </section>
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
const ColumnName = styled.h3`
color: var(--primaryblue);
text-align: left;
`

const UrgencyInStyle = styled.p`
text-align: left;
`
