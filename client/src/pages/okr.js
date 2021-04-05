import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Elementokr from '../assets/1x/Elementokr.png';
import loadFromLocal from '../components/lib/loadFromLocal';
import styled from 'styled-components';
import OkrNavigation from '../components/okrcomponents/Detailspages/OkrNavigation';
import OkrBigPicture from '../components/okrcomponents/OkrBigPicture';
import OkrMissionCard from '../components/okrcomponents/Mission/OkrMissionCard';
import OkrMissionForm from '../components/okrcomponents/Mission/OkrMissionForm';
import OkrObjectives from '../components/okrcomponents/Objectives/OkrObjectives';
import OkrObjectiveForm from '../components/okrcomponents/Objectives/OkrObjectivesForm';
import KeyResultForm from '../components/okrcomponents/KeyResults/KeyResultsForm';
import KeyResult from '../components/okrcomponents/KeyResults/KeyResult';
import OkrWoman from '../components/okrcomponents/OkrWoman';
import OkrIcon from '../components/okrcomponents/OkrIcon';

export default function Okr() {
    const LOCAL_STORAGE_KEY_MISSION = 'okrmission'
    const LOCAL_STORAGE_KEY_OBJECTIVE = 'okrObjective'
    const LOCAL_STORAGE_KEY_KEYRESULT = 'okrKeyResult'
    const [missions, setMissions] = useState(loadFromLocal[LOCAL_STORAGE_KEY_MISSION] ?? []);
    const [objectives, setObjectives] = useState(loadFromLocal[LOCAL_STORAGE_KEY_OBJECTIVE] ?? []);
    const [keyResults, setKeyResults] = useState(loadFromLocal[LOCAL_STORAGE_KEY_KEYRESULT] ?? []);


    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_MISSION, JSON.stringify(missions))
    })
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_OBJECTIVE, JSON.stringify(objectives))
    })
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_KEYRESULT, JSON.stringify(keyResults))
    })

    const addMission = (mission) =>
        setMissions([...missions, { ...mission, id: uuidv4 }]);

    function deleteMission() {
        setMissions([]);
    }

    const addObjective = (objective) =>
        setObjectives([...objectives, { ...objective, id: uuidv4 }]);


    function deleteObjectives() {
        setObjectives([]);
    }

    const addKeyResult = (keyResult) =>
        setKeyResults([...keyResults, { ...keyResult, id: uuidv4 }]);

    function deleteKeyResults() {
        setKeyResults([]);
    }

    return (
        <OkrInStyle>
            <IconInStyle>
                <OkrIcon />
            </IconInStyle>
            <Infotag>Objectives and Key Results (OKR) ist eine beliebte Technik, um Ziele innerhalb einer Organisation zu setzen. Die Hauptanwendung besteht darin, Unternehmens-, Team- und persönliche Ziele zu verbinden, um messbare Ergebnisse zu erhalten. Die OKR-Methode wird von Unternehmen wie Google, Linkedin, Twitter usw. verwendet, um ihr Team bei der Erreichung ihrer Ziele zu unterstützen.</Infotag>
            <OkrNavigation />
            <OkrBigPicture />
            <OkrMissionForm submitFunction={addMission} />
            {missions.map((mission) => (
                <OkrMissionCard
                    key={mission.id}
                    mission={mission}
                />
            ))}
            <ButtonInStyle onClick={deleteMission}>Delete the Mission</ButtonInStyle>

            <OkrObjectiveForm submitFunction={addObjective} />
            {objectives.map((objective) => (
                <OkrObjectives
                    key={objective.id}
                    objective={objective} />
            ))}
            <ButtonInStyle onClick={deleteObjectives}>Delete all Objectives</ButtonInStyle>

            <KeyResultForm submitFunction={addKeyResult} />
            {keyResults.map((keyResult) => (
                <KeyResult
                    key={keyResult.id}
                    keyResult={keyResult} />
            ))}
            <ButtonInStyle onClick={deleteKeyResults}>Delete all Key Results</ButtonInStyle>
            <OkrWoman />
        </OkrInStyle>
    );
}


const IconInStyle = styled.div`
width: 10%;
margin-left: 45%;
padding-top: 1rem;`

const OkrInStyle = styled.div`
background-image: url(${Elementokr});
background-size: cover;
background-attachment: fixed;
width: 100%;
margin: 0;

`

const Infotag = styled.p`
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
text-align: center;
border-radius: .5rem;
margin: 1rem; 
padding: 0.8rem;
background-color: #FFB600;
`
const ButtonInStyle = styled.button`
color: #E85D2F;
background-color:#FDD577;
border-radius: .5rem;
border-color:#E85D2F;
margin: .5rem;
padding: .25rem;`

