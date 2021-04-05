import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function OkrObjectiveForm({ submitFunction }) {

    const initialObjective = {
        title: '',
    };

    const [objective, setObjective] = useState(initialObjective);

    const handleChange = (event) => {
        event.preventDefault();
        const field = event.target;
        const value = field.value;
        setObjective({
            ...objective,
            [field.name]: value
        });
    }

    function submitForm(event) {
        event.preventDefault();
        submitFunction(objective)
        setObjective(initialObjective)
    }

    return (
        <form className='form' onSubmit={submitForm}>
            <InputInStyle
                type='text'
                name='title'
                placeholder='E.g. Journey to the North star'
                onChange={handleChange}
                value={objective.title}
                objective={objective} />
            <ButtonInStyle>Add my Objective</ButtonInStyle>
        </form>
    )
}

OkrObjectiveForm.propTypes = {
    submitFunction: PropTypes.func,
}

const ButtonInStyle = styled.button`
color: #E85D2F;
background-color:#FDD577;
border-radius: .5rem;
border-color:#E85D2F;
margin: .5rem;
padding: .25rem;`

const InputInStyle = styled.input`
border: none;
margin: 1rem;
`