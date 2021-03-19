import { useState } from 'react';
import { v4 as uuid4 } from 'uuid';
import styled from "styled-components";

export default function KanbanIssueForm({ submitIssueFunction }) {
    const initialIssue = {
        issue_name: '',
        tasks: []
    }

    const [issue, setIssue] = useState(initialIssue);

    console.log(initialIssue)

    const handleChange = (event) => {
        event.preventDefault();
        const field = event.target;
        const value = field.value;
        setIssue({
            ...issue,
            [field.name]: value,
            id: uuid4(),
        });
    }

    function handleSubmit(event) {
        console.log(setIssue)
        event.preventDefault();
        submitIssueFunction(issue)
        setIssue(initialIssue)
    }
    return (
        <FormInStyle className='form'>
            <HeaderInStyle>add Issue Name</HeaderInStyle>
            <input
                name='issue_name'
                type='text'
                placeholder='Whats the issue?'
                onChange={handleChange}
                value={issue.issue_name} />
            <ButtonInStyle onSubmit={handleSubmit}>Add Issue Name</ButtonInStyle>
        </FormInStyle>
    )
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
