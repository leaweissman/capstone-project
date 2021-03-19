import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


export default function Navbar() {

    return (
        <footer>
            <Stylednav>
                <NavLinkStyled exact to="/">
                    <h5>Home</h5>
                </NavLinkStyled>

                <NavLinkStyled to='/tasks'>
                    <h5>Tasks</h5>
                </NavLinkStyled>

                <NavLinkStyled to='/okr'>
                    <h5>OKR</h5>
                </NavLinkStyled>

                <NavLinkStyled to='/kanban'>
                    <h5>Kanban</h5>
                </NavLinkStyled>

                <NavLinkStyled to='/scrum'>
                    <h5>Scrum</h5>
                </NavLinkStyled>
            </Stylednav>
        </footer>
    );

}

const NavLinkStyled = styled(NavLink)`
display: flex;
flex-wrap: wrap;
flex-direction: row;
text-decoration: none;
padding: .25rem;
color: var(--primaryorange);
border: .5px solid var(--primaryorange);
border-radius: 4rem;
margin: .5rem;
/* height: 2rem;
 */

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
background-color: white;
border-radius: 4rem;
position: fixed; 
bottom: 0;
left: 0;
right: 0;
`