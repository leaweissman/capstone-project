import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import OkrIcon from '../components/okrcomponents/OkrIcon';
import ScrumIcon from '../components/scrumcomponents/ScrumIcon';
import KanbanIcon from '../components/kanbancomponents/KanbanIcon';
import toDoIcon from '../assets/toDoIcon.svg';
import home from '../assets/home.svg';

export default function Navbar() {

    return (
        <footer>
            <Stylednav>
                <NavLinkStyledHome exact to="/">
                    <img src={home} alt='' />
                </NavLinkStyledHome>

                <NavLinkStyledToDo to='/tasks'>
                    <img src={toDoIcon} alt='' />
                </NavLinkStyledToDo>

                <NavLinkStyledOkr to='/okr'>
                    <OkrIcon />
                </NavLinkStyledOkr>

                <NavLinkStyledKanban to='/kanban'>
                    <KanbanIcon />
                </NavLinkStyledKanban>

                <NavLinkStyledScrum to='/scrum'>
                    <ScrumIcon />
                </NavLinkStyledScrum>
            </Stylednav>
        </footer>
    );

}

/* const NavLinkStyled = styled(NavLink)`
display: flex;
flex-wrap: wrap;
flex-direction: row;
text-decoration: none;
padding: .25rem;
color: var(--primaryorange);
border: .5px solid var(--primaryorange);
border-radius: 1rem;
height:2rem;
margin: 1rem;


&:hover{
    color: var(--primaryblue);
}

&.active{
    color: var(--primaryblue);
    font-weight: bold;
}
` */

const Stylednav = styled.nav`
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: space-evenly;
background-color: white;
border-radius: 2rem;
position: fixed; 
width: 80%;
height: 9%;
bottom: 0;
left: 3rem;
right: 0;
`

const NavLinkStyledHome = styled(NavLink)`
width: 30px;
padding: 20px 5px;

&:hover{
    width: 35px;
}
&.active{
    width: 35px;
}
`

const NavLinkStyledOkr = styled(NavLink)`
width: 30px;
padding: 20px 5px;

&:hover{
    width: 35px;
}
&.active{
    width: 35px;
}
`

const NavLinkStyledScrum = styled(NavLink)`
width: 30px;
padding: 20px 5px;

&:hover{
    width: 35px;
}
&.active{
    width: 35px;
}
`

const NavLinkStyledKanban = styled(NavLink)`
margin-top: 1.25rem;
margin-left: 5rem;
margin-right: 0;
padding: 0;


`


const NavLinkStyledToDo = styled(NavLink)`
width: 30px;
padding: 20px 5px;

&:hover{
    width: 35px;
}
&.active{
    width: 35px;
}
`
