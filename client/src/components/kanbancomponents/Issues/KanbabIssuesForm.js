import styled from "styled-components";

export default function KanbanIssueForm({ onCreateIssueToDo }) {
    function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const input = form.title;
        onCreateIssueToDo(input.value);

    }
    return (
        <FormInStyle className='form' onSubmit={handleSubmit}>
            <HeaderInStyle>add Issue Name</HeaderInStyle>
            <input
                name='title'
                type='text'
                placeholder='Whats the issue?' />
            <ButtonInStyle>Add Issue Name</ButtonInStyle>
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
