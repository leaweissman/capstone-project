import { useState } from 'react';
import { v4 as uuid4 } from 'uuid';

export default function OkrMissionForm({ submitFunction }) {

    const initialMission = {
        mission_name: '',
    };

    const [mission, setMission] = useState(initialMission);

    const handleChange = (event) => {
        event.preventDefault();
        const field = event.target;
        const value = field.value;
        setMission({
            ...mission,
            [field.name]: value,
            id: uuid4(),
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
                name='mission_name'
                placeholder='Was ist das Leitbild?'
                onChange={handleChange}
                value={mission.mission_name} />
            <button>Add my long term goals</button>

            {/* <input
                    type='text'
                    name='moal_name'
                    placeholder='Moals'
                />
                <button>Add Moals</button>
                <input
                    type='text'
                    name='plannings'
                    placeholder='plannings' />
                <button>Add the Plannings</button>
                <input
                    type='text'
                    name='weekly'
                    placeholder='Weekly' />
                <button>Weekly</button> */}
        </form>
    )
}