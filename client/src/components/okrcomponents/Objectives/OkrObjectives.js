import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function OkrObjectives({ objective }) {
    return (
        <Wrapper>
            <h6>{objective.title}</h6>
        </Wrapper>
    )
}

OkrObjectives.propTypes = {
    objective: PropTypes.object,
}

const Wrapper = styled.div`
text-align: center;
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
border-radius: 1rem;
margin: 1rem; 
padding: 0.8rem;
background-color: white;
`