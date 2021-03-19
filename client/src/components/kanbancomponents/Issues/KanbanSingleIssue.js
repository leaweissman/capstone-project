import styled from "styled-components"

export default function IssueToDo({ title, onDeleteIssue }) {
    return (
        <section>
            <IssueInStyle>
                {title}
                <DeleteIssueInSytle onClick={onDeleteIssue}> &times;</DeleteIssueInSytle>
            </IssueInStyle>

        </section>
    )
}

const IssueInStyle = styled.h4`
color: var(--primaryblue);
text-align:left;
margin: 1rem;`

const DeleteIssueInSytle = styled.span`
color: var(--primarypink);`
