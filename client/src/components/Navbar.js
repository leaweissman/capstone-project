import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


export default function Navbar() {

    return (
        <header>
            <Stylednav>
                <NavLinkStyled exact to="/">
                    <h1>Home</h1>
                </NavLinkStyled>

                <NavLinkStyled to='/tasks'>
                    <h1>Tasks</h1>
                </NavLinkStyled>

                <NavLinkStyled to='/okr'>
                    <h1>OKR</h1>
                </NavLinkStyled>

                <NavLinkStyled to='/kanban'>
                    <h1>Kanban</h1>
                </NavLinkStyled>

                <NavLinkStyled to='/scrum'>
                    <h1>Scrum</h1>
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
    color: var(--primaryblue);
}

&.active{
    color: var(--primaryblue);
    font-weight: bold;
}
`
const Stylednav = styled.nav`
display:flex;
flex-wrap:wrap;
justify-content: center;
background-color: var(--primaryorange)
`