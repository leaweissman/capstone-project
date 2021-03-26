import styled from 'styled-components';

export default function OkrMissionCard({ mission }) {
    return (
        <Wrapper>
            <h6>Mission statement:</h6>
            <p>{mission.mission_name}</p>
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