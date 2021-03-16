import styled from 'styled-components';

export default function KanbanCard({ column }) {
    console.log(column);
    return (
        <Wrapper>
            <ColumnName>{column.column_name}</ColumnName>
            <IssuesInStyle>
                <IssueName>Issue Name: {column.issue_name}</IssueName>
                <TasksInStyle>tasks: {column.task}</TasksInStyle>
                <UrgencyInStyle>{column.urgency} urgency:</UrgencyInStyle>
            </IssuesInStyle>
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

const IssuesInStyle = styled.section`
border: solid 2px var(--primaryblue);
border-radius: 1rem;
margin: .5rem;
`
const TasksInStyle = styled.p`
text-align: left;`

const IssueName = styled.p`
text-align: left;
`
const UrgencyInStyle = styled.p`
text-align: left;
`
