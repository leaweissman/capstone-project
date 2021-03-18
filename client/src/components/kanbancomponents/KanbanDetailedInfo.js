
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import styled from "styled-components";
import History from '../kanbancomponents/Detailpages/History';
import BoardInfo from '../kanbancomponents/Detailpages/KanbanBoradInfo';
import ForMe from '../kanbancomponents/Detailpages/ForMe';
import DetailsNavigation from '../kanbancomponents/Detailpages/Detailsnavigation';

function Characters() {
    let { path } = useRouteMatch();

    return (
        <div>
            <TopicInStyle>About Kanban</TopicInStyle>
            <DetailsNavigation />

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



const TopicInStyle = styled.p`
margin: 2rem;`
