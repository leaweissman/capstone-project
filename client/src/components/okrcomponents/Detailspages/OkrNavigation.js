import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


export default function OkrInformation() {
    return (
        <header>
            <Stylednav>
                <NavLinkStyled to="/OkrInformation">
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
background-color: #FFB600;
color: white;
width: 100%;
padding: .5rem .5rem .5rem 4rem;
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
border-radius: .5rem;


&:hover{
    color: #E85D2F;
}

&.active{
    color: var(--primaryblue);
    font-weight: bold;
}
`
const Stylednav = styled.nav`
color: var(--primarypink);
display:flex;
flex-wrap:wrap;
justify-content: center;
border-radius: 5rem;
margin: 1rem;
background-color: white;
`