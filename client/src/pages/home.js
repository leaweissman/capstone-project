import styled from 'styled-components';
export default function Home() {
    return (
        <BackgroundInStyle>
            <p>Welcome home</p>
            <p>Agileup ist eine App, die dein Leben mit agilen Franmeworks einfacher gestalten soll.</p>
        </BackgroundInStyle>
    )
}
const BackgroundInStyle = styled.div`
background-color: white;
border-radius: 3rem;
padding: 2rem;
margin: 2rem;
text-align: center; 
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`
