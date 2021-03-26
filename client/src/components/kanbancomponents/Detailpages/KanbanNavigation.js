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
color: var(--primarypink);

&:hover{
    color: var(--primaryblue);
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