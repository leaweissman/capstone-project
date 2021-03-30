import { useState } from 'react';
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
            <input
                type='text'
                name='title'
                placeholder='E.g. North Star'
                onChange={handleChange}
                value={mission.title}
                mission={mission} />
            <button>Add my long term goals</button>
        </form>
    )
}

OkrMissionForm.propTypes = {
    submitFunction: PropTypes.func,
}