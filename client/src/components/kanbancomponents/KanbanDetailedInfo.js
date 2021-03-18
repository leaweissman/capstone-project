
import {
    Switch,
    Route,
    NavLink,
    useRouteMatch
} from "react-router-dom";
import styled from "styled-components";
import History from '../kanbancomponents/Detailpages/History';
import BoardInfo from '../kanbancomponents/Detailpages/KanbanBoradInfo';
import ForMe from '../kanbancomponents/Detailpages/ForMe';

function Characters() {
    let { url, path } = useRouteMatch();

    return (
        <div>
            <TopicInStyle>About Kanban</TopicInStyle>
            <nav>
                <NavLinkStyled to={url + "/KanbanBoard"}>The Kanban board</NavLinkStyled>
                <NavLinkStyled to={url + "/History"}>History</NavLinkStyled>
                <NavLinkStyled to={url + "/ForMe"}>what can it do for me?</NavLinkStyled>
            </nav>

            <Switch>
                <Route exact path={path}>
                    <TopicInStyle>Please select a topic about Kanban of which you would like further Info</TopicInStyle>
                </Route>
                <Route path={path + "/History"}>
                    <History />
                </Route>
                <Route path={path + "/KanbanBoard"}>
                    <BoardInfo />
                </Route>
                <Route path={path + "/ForMe"}>
                    <ForMe />
                </Route>
            </Switch>
        </div>
    );


}

export default Characters;

const NavLinkStyled = styled(NavLink)`
  background: var(--primarypink);
  color: var(--primaryblue);
  border-radius: 30rem;
  margin: 1rem;
  padding: 1rem;

 /*  &:hover {
    background: rebeccapurple;}

    &.active{ width: 2rem;
    };
  }; */
`


const TopicInStyle = styled.p`
margin: 2rem;`
