import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import OkrIcon from '../components/okrcomponents/OkrIcon';
import ScrumIcon from '../components/scrumcomponents/ScrumIcon';
import kanbanDashboardIcon from '../assets/kanbanDashboardIcon.svg';
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
                    <StyledKanban src={kanbanDashboardIcon} alt='' />
                </NavLinkStyledKanban>

                <NavLinkStyledScrum to='/scrum'>
                    <ScrumIcon />
                </NavLinkStyledScrum>
            </Stylednav>
        </footer>
    );

}

const Stylednav = styled.nav`
display: flex;
justify-content: space-evenly;
background-color: #B0D0D1;
border-radius: 1rem;
position: fixed; 
bottom: 0;
width: 100%;
height: 80px;
`

const NavLinkStyledHome = styled(NavLink)`
width: 2.5rem;
padding: 2rem .5rem;

&:hover{
    background: #E2A790;
    border-radius: 3rem;

}
&.active{
    background: #E2A790;
    border-radius: 3rem;
}
`


const NavLinkStyledOkr = styled(NavLink)`
width: 2.5rem;
padding: 2rem .5rem;

&:hover{
    background: #BE683E;
    border-radius: 3rem;

}
&.active{
    background: #BE683E;
    border-radius: 3rem;
}
`


const NavLinkStyledScrum = styled(NavLink)`
width: 2.5rem;
padding: 2rem .5rem;

&:hover{
    background: #B2C390;
    border-radius: 3rem;

}
&.active{
    background: #B2C390;
    border-radius: 3rem;
}
`

const StyledKanban = styled.img`
width: 1.7rem;
margin-top: 1.9rem;
padding-left: .35rem;`

const NavLinkStyledKanban = styled(NavLink)`
width: 2rem;

&:hover{
    background: #F0BBA8;
    border-radius: 3rem;

}
&.active{
    background: #F0BBA8;
    border-radius: 3rem;
} 

`


const NavLinkStyledToDo = styled(NavLink)`
width: 2.5rem;
padding: 2rem .5rem;

&:hover{
    background: #D2E9F7;
    border-radius: 3rem;

}
&.active{
    background: #D2E9F7;
    border-radius: 3rem;
}
`
