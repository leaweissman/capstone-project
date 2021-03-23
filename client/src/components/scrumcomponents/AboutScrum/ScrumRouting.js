
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import styled from "styled-components";
import ScrumHistory from './ScrumHistory';
import ScrumDetailsNavigation from './ScrumDetailsNavigation';
import ScrumForMe from "./ScrumForMe";
import ScrumBoardInfo from "./ScrumBoardInfo";

function ScrumRouting() {
    let { path } = useRouteMatch();

    return (
        <div>
            <TopicInStyle>About Scrum</TopicInStyle>
            <ScrumDetailsNavigation />
            <Switch>
                <Route exact path={path}>
                    <TopicInStyle>Please select a topic about Scrum of which you would like further Info</TopicInStyle>
                </Route>
                <Route path={path + "/ScrumBoard"}>
                    <ScrumBoardInfo />
                </Route>
                <Route path={path + "/ScrumHistory"}>
                    <ScrumHistory />
                </Route>
                <Route path={path + "/ScrumForMe"}>
                    <ScrumForMe />
                </Route>

            </Switch>
        </div>
    );


}

export default ScrumRouting;



const TopicInStyle = styled.p`
margin: 2rem;`
