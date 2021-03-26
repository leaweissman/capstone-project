import styled from 'styled-components';
import okrcycle from '../../assets/okrcycle.png';

export default function OkrBigPicture() {
    return (
        <p>
            <Image src={okrcycle} />
        </p>
    )
}

const Image = styled.img`
display: flex;
flex-direction: center;
justify-content: center;
width: 90%;
margin: 2rem;
`

