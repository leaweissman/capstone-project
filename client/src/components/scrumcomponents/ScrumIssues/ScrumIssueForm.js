import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

export default function ScrumIssueForm({ submitIssueFunction }) {
    const initialIssue = {
        title: '',
        tasks: []
    }

    const [issue, setIssue] = useState(initialIssue);

    const handleChange = (event) => {
        event.preventDefault();
        const field = event.target;
        const value = field.value;
        setIssue({
            ...issue,
            [field.name]: value,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        submitIssueFunction(issue)
        setIssue(initialIssue)
    }
    return (
        <FormInStyle className="form" onSubmit={handleSubmit}>
            <HeaderInStyle>add Issue Name</HeaderInStyle>
            <input
                name='title'
                type='text'
                placeholder='Whats the issue?'
                onChange={handleChange}
                value={issue.title} />
            <ButtonInStyle>Add Issue Name</ButtonInStyle>
        </FormInStyle>
    )
}

ScrumIssueForm.propTypes = {
    submitIssueFunction: PropTypes.func,
}

const FormInStyle = styled.form`
padding-top: 2rem;
padding-bottom: 0;
margin-bottom:0;`

const ButtonInStyle = styled.button`
color: var(--primaryblue);
margin: .5rem;`

const HeaderInStyle = styled.h4`
color:var(--primaryblue);`
