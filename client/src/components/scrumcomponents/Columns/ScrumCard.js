import styled from 'styled-components';


export default function ScrumCard({ column, onDeleteMyColumn }) {


    return (
        <Wrapper>
            <ColumnName>{column.column_name}</ColumnName>
            <button onClick={() => onDeleteMyColumn(column.id)}
            >Delete my Column</button>
            <section>
                <ScrumIssues />
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