import styled from "styled-components"
import PropTypes from 'prop-types';

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

ScrumIssueHeadline.propTypes = {
    title: PropTypes.string,
    onDeleteIssue: PropTypes.func,
}
const IssueInStyle = styled.h4`
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
text-align:left;
margin: 1rem;`

const DeleteIssueInSyle = styled.span`
color: var(--primarypink);`
