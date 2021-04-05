import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


export default function KanbanInformation() {
    return (
        <header>
            <Stylednav>
                <NavLinkStyled to="/KanbanInformation">
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


&:hover{
    color: #FAB8A4;
}

&.active{
    color: var(--primaryblue);
    font-weight: bold;
}
`
const Stylednav = styled.nav`
color: white;
display:flex;
flex-wrap:wrap;
justify-content: center;
border-radius: 1rem;
margin: 1rem;
background-color: #D6846B;
`