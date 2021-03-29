import styled from "styled-components"

export default function ScrumIssueHeadline({ title, onDeleteIssue }) {
    return (
        <section>
            <IssueInStyle>
                {title}
                <DeleteIssueInSyle onClick={onDeleteIssue}> &times;</DeleteIssueInSyle>
            </IssueInStyle>

        </section>
    )
}

const IssueInStyle = styled.h4`
color: var(--primaryblue);
text-align:left;
margin: 1rem;`

const DeleteIssueInSyle = styled.span`
color: var(--primarypink);`
