import styled from 'styled-components';
import WomanStanding from '../../assets/WomanStanding.png';

export default function OkrWoman() {
    return (
        <ImagePInStyle>
            <Image src={WomanStanding} />
        </ImagePInStyle>
    )
}


const ImagePInStyle = styled.p`
margin: 0;`

const Image = styled.img`
display: flex;
margin-bottom: 0;
`

