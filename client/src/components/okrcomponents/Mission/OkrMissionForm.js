import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function OkrMissionForm({ submitFunction }) {

    const initialMission = {
        title: '',
    };

    const [mission, setMission] = useState(initialMission);

    const handleChange = (event) => {
        event.preventDefault();
        const field = event.target;
        const value = field.value;
        setMission({
            ...mission,
            [field.name]: value,
        });
    }

    function submitForm(event) {
        event.preventDefault();
        submitFunction(mission)
        setMission(initialMission)
    }

    return (
        <form className='form' onSubmit={submitForm}>
            <InputInStyle
                type='text'
                name='title'
                placeholder='E.g. North Star'
                onChange={handleChange}
                value={mission.title}
                mission={mission} />
            <ButtonInStyle>Add my long term goals</ButtonInStyle>
        </form>
    )
}

OkrMissionForm.propTypes = {
    submitFunction: PropTypes.func,
}

const InputInStyle = styled.input`
border: none;
margin: 1rem;
`

const ButtonInStyle = styled.button`
color: #E85D2F;
background-color:#FDD577;
border-radius: .5rem;
border-color:#E85D2F;
margin: .5rem;
padding: .25rem;`

