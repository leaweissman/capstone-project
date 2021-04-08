import {
    NavLink,
    useRouteMatch
} from "react-router-dom";
import styled from 'styled-components';

export default function OkrDetailsNavigation() {
    let { url } = useRouteMatch();
    return (
        <NavigationInStyle >
            <NavLinkStyled to={url + "/OkrBoard"}>The Okr board</NavLinkStyled>
            <NavLinkStyled to={url + "/OkrHistory"}>History</NavLinkStyled>
            <NavLinkStyled to={url + "/OkrForMe"}>How can it help?</NavLinkStyled>
            <NavLinkStyledLong to={url + "/Objectives"}>Objectives</NavLinkStyledLong>
            <NavLinkStyled to={url + "/KeyResults"}>Key Results</NavLinkStyled>
        </NavigationInStyle >
    )
}


const NavLinkStyled = styled(NavLink)`
  background: #E85D2F;
  color: #FAC993    ;
  border-radius: 30rem;
  margin: 1rem;
  padding: 1rem;
  width: 6rem;
  height: 5.5rem;
  text-align: center;
  text-decoration: none;


  &:hover {
    background: #FAC993;
    color: #E85D2F;}

    &.active{ 
    color: #E85D2F;
    background-color:#FAC993;
    };
`

const NavLinkStyledLong = styled(NavLink)`
  background: #E85D2F;
  color: #FAC993    ;
  border-radius: 30rem;
  margin: 1rem;
  padding-right: 1.3rem;
  padding-top: 1rem;
  padding-left:.7rem;
  width: 6.5rem;
  height: 5.5rem;
  text-align: center;
  text-decoration: none;


  &:hover {
    background: #FAC993;
    color: #E85D2F;}

    &.active{ 
    color: #E85D2F;
    background-color:#FAC993;
    };
`
const NavigationInStyle = styled.nav`
display: flex;
flex-wrap: wrap;`
