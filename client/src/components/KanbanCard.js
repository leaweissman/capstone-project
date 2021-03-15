import styled from 'styled-components';

export default function KanbanCard() {
    return (
        <Wrapper>

            <h2>Test</h2>
            <h3>Test</h3>
            <h3>Test</h3>
            <h3>Test</h3>
            <button>add new board</button>

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
