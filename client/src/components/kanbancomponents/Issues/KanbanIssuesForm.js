import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

export default function KanbanIssueForm({ submitIssueFunction }) {
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

            <InputInStyle
                name='title'
                type='text'
                placeholder='Whats the issue?'
                onChange={handleChange}
                value={issue.title} />
            <ButtonInStyle>+</ButtonInStyle>
        </FormInStyle>
    )
}

KanbanIssueForm.propTypes = {
    submitIssueFunction: PropTypes.func,
}

const FormInStyle = styled.form`
padding-top: 2rem;
padding-bottom: 0;
margin-bottom:0;`

const ButtonInStyle = styled.button`
color: white;
background-color:#D6846B;
border-radius: .5rem;
border-color:#AB3E1D;
margin: .5rem;`

const InputInStyle = styled.input`
border: none;`
