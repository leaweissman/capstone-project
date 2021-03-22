import styled from 'styled-components';

export default function OkrInfoTag() {
    return (
        <Infotag>Okr is Loremn ipsum</Infotag>
    )
}

const Infotag = styled.p`
text-align: center;
border: solid 2px var(--primarypink);
border-radius: 1rem;
margin: 1rem; 
padding: 0.8rem;
background-color: white;
`