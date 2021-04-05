import styled from 'styled-components';
import WomanStanding from '../../assets/WomanStanding.png';

export default function OkrWoman() {
    return (
        <p>
            <Image src={WomanStanding} />
        </p>
    )
}

const Image = styled.img`
display: flex;
`

