
import styled from 'styled-components';

export default function Tasks() {

    return (
        <TaskBackgroundInStyle>
            <p>Welcome to Tasks</p>

        </TaskBackgroundInStyle>
    );
}

const TaskBackgroundInStyle = styled.div`
background-color: white;
border: solid 2px var(--primaryblue);
border-radius: 3rem;
padding: 2rem;
`
