
import {
    Switch,
    Route,
    NavLink,
    useParams,
    useRouteMatch
} from "react-router-dom";
import styled from "styled-components";

function Characters() {
    let { url, path } = useRouteMatch();

    return (
        <div>
            <TopicInStyle>About Kanban</TopicInStyle>
            <nav>
                <NavLinkStyled to={url + "/mini"}>The Kanban board</NavLinkStyled>
                <NavLinkStyled to={url + "/micki"}>History</NavLinkStyled>
                <NavLinkStyled to={url + "/Donald"}>what can it do for me?</NavLinkStyled>
            </nav>

            <Switch>
                <Route exact path={path}>
                    <TopicInStyle>Please select a topic about Kanban of which you would like further Info</TopicInStyle>
                </Route>
                <Route path={path + "/:characterName"}>
                    <Character />
                </Route>
            </Switch>
        </div>
    );

    function Character() {
        const { characterName } = useParams();
        return (
            <div>
                <TopicInStyle>{characterName}</TopicInStyle>
            </div>
        );
    }
}

export default Characters;

const NavLinkStyled = styled(NavLink)`
  background: var(--primarypink);
  color: var(--primaryblue);
  border-radius: 30rem;
  margin: 1rem;
  padding: 1rem;

  &:hover {
    background: rebeccapurple;}

    &.active{ width: 2rem;
    };
  };
`


const TopicInStyle = styled.p`
margin: 2rem;`
