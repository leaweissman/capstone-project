import styled from "styled-components"
import PropTypes from 'prop-types';

export default function ScrumIssueHeadline({ title, onDeleteIssue, showIssueDelete }) {
    return (
        <section>
            <IssueInStyle>
                {title}
                {showIssueDelete && <DeleteIssueInSyle onClick={onDeleteIssue}> &times;</DeleteIssueInSyle>}
            </IssueInStyle>

        </section>
    )
}

ScrumIssueHeadline.propTypes = {
    title: PropTypes.string,
    onDeleteIssue: PropTypes.func,
}
const IssueInStyle = styled.h4`
text-align:left;
margin: 1rem;`

const DeleteIssueInSyle = styled.span`
color: white;`
