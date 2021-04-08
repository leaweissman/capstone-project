import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


export default function ScrumNavigation() {
    return (
        <header>
            <Stylednav>
                <NavLinkStyled to="/ScrumInformation">
                    <h1>Show me further information please</h1>
                </NavLinkStyled>
            </Stylednav>
        </header>
    );

}

const NavLinkStyled = styled(NavLink)`
display: flex;
flex-direction: row;
text-decoration: none;
padding: 0.5rem;
color: white;
background-color: #B6CE91;
width: 100%;
border-radius: 2rem;

&:hover{
    color: #3C591E;
}

`
const Stylednav = styled.nav`
color: green;
display:flex;
flex-wrap:wrap;
justify-content: center;
border-radius: 5rem;
margin: 1rem;
background-color: white;
`