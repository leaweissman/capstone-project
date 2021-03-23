import { useState } from 'react';
import { v4 as uuid4 } from 'uuid';

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
            [field.name]: value,
            id: uuid4(),
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
                value={objective.title} />
            <button>Add my Objective</button>
        </form>
    )
}