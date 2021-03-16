import styled from 'styled-components';
import { useState } from 'react';

export default function Tag({ onCreateTag, tags, onDeleteTagFunction }) {
    const [value, setValue] = useState('');

    const handleChange = (event) =>
        setValue(event.target.value) //event.tagret um ans eingabefeld zu kommen, .value um an eingabe selber zu kommen 
    console.log(value);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            onCreateTag(value);
            console.log('You just pressed Enter');
            setValue('');
        }
    }
    return (
        <label> Please add your tasks:
            <section>
                {tags.map(tag =>
                    <span>
                        {tag}
                        <DeleteInStyle onClick={() => onDeleteTagFunction(tag)}>X</DeleteInStyle>
                    </span>)}

                <input
                    placeholder='Type your Task here'
                    type='text'
                    name='tags'
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    value={value} />
            </section>
        </label>
    )
}
const DeleteInStyle = styled.i`
margin: .3rem .5rem;`

/* const TagsList = styled.section`
border: solid 1px var(--primaryorange);
background: var(--primarypink);
padding: 0.3rem 0.6rem;
color: var(--hufflepuff);
border-radius: 4px;
margin: 2rem;
display: flex;
flex-wrap: wrap;
`; */

