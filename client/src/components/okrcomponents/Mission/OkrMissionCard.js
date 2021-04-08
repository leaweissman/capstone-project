import styled from 'styled-components';
import PropTypes from 'prop-types';
import WomanStanding from '../../../assets/WomanStanding.png';

export default function OkrMissionCard({ mission }) {
    return (
        <Wrapper>
            <p>Mission statement:</p>
            <p>{mission.title}</p>
            <img scr={WomanStanding} alt='' />
        </Wrapper>
    )
}

OkrMissionCard.propTypes = {
    mission: PropTypes.object,
}

const Wrapper = styled.div`
text-align: center;
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
border-radius: .5rem;
margin: 1rem; 
padding: 0.8rem;
background-color:#FF5800;
`