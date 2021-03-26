
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import styled from "styled-components";
import History from './History';
import BoardInfo from './KanbanBoradInfo';
import ForMe from './ForMe';
import DetailsNavigation from './Detailsnavigation';

export default function KanbanRouting() {
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




const TopicInStyle = styled.p`
margin: 2rem;`
