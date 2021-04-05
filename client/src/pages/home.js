import styled from 'styled-components';
import sittingman from '../assets/sittingman.png';
import home from '../assets/home.svg';

export default function Home() {
    return (
        <div>
            <HomeIconInStyle src={home} alt='' />
            <BackgroundInStyle>
                <p>Welcome home</p>
                <p>Agileup ist eine App, die dein Leben mit agilen Franmeworks einfacher gestalten soll.</p>
            </BackgroundInStyle>
            <SittingInStyle src={sittingman} alt='' />
        </div>
    )
}
const BackgroundInStyle = styled.div`
background-color: #D2CECB;
border-radius: 3rem;
padding: 2rem;
margin: 2rem;
text-align: center; 
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`

const SittingInStyle = styled.img`
display: flex;
padding-left: 9rem;
padding-right: 0;
margin-right: 0;
`
const HomeIconInStyle = styled.img`
margin-top: 1rem;
width: 10%;
margin-left: 45%;
`