import styled from 'styled-components';

export default function OkrObjectives({ objective }) {
    return (
        <Wrapper>
            <h6>{objective.title}</h6>
        </Wrapper>
    )
}
const Wrapper = styled.div`
text-align: center;
border: solid 2px var(--primarypink);
border-radius: 1rem;
margin: 1rem; 
padding: 0.8rem;
background-color: white;
`