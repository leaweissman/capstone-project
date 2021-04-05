import styled from "styled-components";
import PropTypes from 'prop-types';

export default function IssueHeadline({ title, onDeleteIssue }) {
    return (
        <section>
            <IssueInStyle>
                {title}
                <DeleteIssueInSyle onClick={onDeleteIssue}> &times;</DeleteIssueInSyle>
            </IssueInStyle>

        </section>
    )
}

IssueHeadline.propTypes = {
    title: PropTypes.string,
    onDeleteIssue: PropTypes.func,
}

const IssueInStyle = styled.h4`
color: white;
text-align:left;
margin: 1rem;`

const DeleteIssueInSyle = styled.span`
color: white;`
