import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import styled from "styled-components";
import OkrDetailsNavigation from '../Detailspages/OkrDetailsNavi';
import OkrHistory from '../Detailspages/OkrHistory';
import OkrForMe from '../Detailspages/OkrForMe';

function OkrRouting() {
    let { path } = useRouteMatch();

    return (
        <div>
            <TopicInStyle>About Okr</TopicInStyle>
            <OkrDetailsNavigation />

            <Switch>
                <Route exact path={path}>
                    <TopicInStyle>Please select a topic about Okr of which you would like further Info</TopicInStyle>
                </Route>
                <Route path={path + "/OkrHistory"}>
                    <OkrHistory />
                </Route>
                <Route path={path + "/OkrForMe"}>
                    <OkrForMe />
                </Route>
            </Switch>
        </div>
    );


}

export default OkrRouting;



const TopicInStyle = styled.p`
margin: 2rem;`
