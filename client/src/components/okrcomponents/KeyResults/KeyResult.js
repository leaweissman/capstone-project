import styled from 'styled-components';

export default function KeyResult({ keyResult }) {
    return (
        <Wrapper>
            <p>{keyResult.title}</p>
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