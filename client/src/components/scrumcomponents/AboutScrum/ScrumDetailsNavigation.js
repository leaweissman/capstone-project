import {
    NavLink,
    useRouteMatch
} from "react-router-dom";
import styled from 'styled-components';

export default function ScrumDetailsNavigation() {
    let { url } = useRouteMatch();
    return (
        <NavigationInStyle >
            <NavLinkStyled to={url + "/ScrumBoard"}>The Scrum board</NavLinkStyled>
            <NavLinkStyled to={url + "/ScrumHistory"}>History</NavLinkStyled>
            <NavLinkStyled to={url + "/ScrumForMe"}>How can it help?</NavLinkStyled>
        </NavigationInStyle >)
}

const NavLinkStyled = styled(NavLink)`
  background: var(--primarypink);
  color: var(--primaryblue);
  border-radius: 30rem;
  margin: 1rem;
  padding: 1rem;
  width: 5.5rem;
  height: 5.5rem;
  text-align: center;
  text-decoration: none;


  &:hover {
    background: rebeccapurple;
    color: var(--primarypink);}

    &.active{ 
    color: var(--primarypink);
    background-color:var(--primaryyellow);
    };
`
const NavigationInStyle = styled.nav`
display: flex;
flex-wrap: wrap;`
