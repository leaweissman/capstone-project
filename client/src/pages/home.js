import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import sittingman from '../assets/sittingman.png';
import home from '../assets/home.svg';
import OkrIcon from '../components/okrcomponents/OkrIcon';
import KanbanIcon from '../components/kanbancomponents/KanbanIcon';
import ScrumIcon from '../components/scrumcomponents/ScrumIcon';
export default function Home() {
    return (
        <div>
            <HomeIconInStyle src={home} alt='' />
            <BackgroundInStyle>
                <p>Welcome home</p>
                <p>Agileup ist eine App, die dein Leben mit agilen Franmeworks einfacher gestalten soll.</p>
            </BackgroundInStyle>

            <Stylednav>
                <NavLinkStyledOkr to="/okr">
                    <IconInStyleOkr>
                        <OkrIcon />
                    </IconInStyleOkr>
                    <p>Get me started with Okr</p>
                </NavLinkStyledOkr>

                <NavLinkStyledKanban to="/kanban">
                    <IconInStyleKanban>
                        <KanbanIcon />
                    </IconInStyleKanban>
                    <p>get me started with kanban</p>
                </NavLinkStyledKanban>
                <NavLinkStyledScrum to="/scrum">
                    <IconInStyleScrum>
                        <ScrumIcon />
                    </IconInStyleScrum>
                    <p>get me started with scrum</p>
                </NavLinkStyledScrum>
            </Stylednav>

            <SittingInStyle src={sittingman} alt='' />

        </div>
    )
}

const IconInStyleOkr = styled.div`
width: 15%;
margin-left: 45%;
padding-top: 1rem;`

const IconInStyleKanban = styled.div`
width: 40%;
margin-left: 45%;
padding-top: 1rem;`

const IconInStyleScrum = styled.div`
width: 15%;
margin-left: 45%;
padding-top: 1rem;`

const Stylednav = styled.nav`
color: white;
display:flex;
flex-wrap:wrap;
justify-content: center;
border-radius: 1rem;
margin: 1rem;
`
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
const NavLinkStyledOkr = styled(NavLink)`
text-decoration: none;
padding: 0.5rem;
margin: 1rem;
color: white;
background-color: #A3472A;
border-radius: 2rem;


&:hover{
    color: #F09939;
}
`
const NavLinkStyledKanban = styled(NavLink)`
text-decoration: none;
padding: 0.5rem;
margin: 1rem;
color: white;
background-color: #F0BBA8;
border-radius: 2rem;


&:hover{
    color: #A3472A;
}
`

const NavLinkStyledScrum = styled(NavLink)`
text-decoration: none;
padding: 0.5rem;
margin: 1rem;
color: white;
background-color: #B2C390;
border-radius: 2rem;

&:hover{
    color: #295C2A;

}
&.active{
    color: #295C2A;
}
`

