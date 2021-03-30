import { useState } from 'react';
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
            <input
                type='text'
                name='title'
                placeholder='E.g. Journey to the North star'
                onChange={handleChange}
                value={objective.title}
                objective={objective} />
            <button>Add my Objective</button>
        </form>
    )
}

OkrObjectiveForm.propTypes = {
    submitFunction: PropTypes.func,
}