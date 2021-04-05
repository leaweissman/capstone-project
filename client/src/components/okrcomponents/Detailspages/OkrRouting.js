import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import styled from "styled-components";
import OkrDetailsNavigation from '../Detailspages/OkrDetailsNavi';
import OkrHistory from '../Detailspages/OkrHistory';
import OkrForMe from '../Detailspages/OkrForMe';
import OkrInfo from '../Detailspages/OkrInfo';
import KeyResultsInfo from '../Detailspages/KeyResultsInfo';
import ObjectivesInfo from "./ObjectivesInfo";
function OkrRouting() {
    let { path } = useRouteMatch();

    return (
        <div>
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
                <Route path={path + "/OkrBoard"}>
                    <OkrInfo />
                </Route>
                <Route path={path + "/Objectives"}>
                    <ObjectivesInfo />
                </Route>
                <Route path={path + "/KeyResults"}>
                    <KeyResultsInfo />
                </Route>
            </Switch>
        </div>
    );


}

export default OkrRouting;



const TopicInStyle = styled.p`
margin: 2rem;`
