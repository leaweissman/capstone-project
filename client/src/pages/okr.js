import { useState, useEffect } from 'react';
import loadFromLocal from '../components/kanbancomponents/lib/loadFromLocal';
import styled from 'styled-components';
import OkrNavigation from '../components/okrcomponents/Detailspages/OkrNavigation';
import OkrBigPicture from '../components/okrcomponents/OkrBigPicture';
import OkrMissionCard from '../components/okrcomponents/Mission/OkrMissionCard';
import OkrMissionForm from '../components/okrcomponents/Mission/OkrMissionForm';
import OkrObjectives from '../components/okrcomponents/Objectives/OkrObjectives';
import OkrObjectiveForm from '../components/okrcomponents/Objectives/OkrObjectivesForm';
import KeyResultForm from '../components/okrcomponents/KeyResults/KeyResultsForm';
import KeyResult from '../components/okrcomponents/KeyResults/KeyResult';

export default function Okr() {
    const LOCAL_STORAGE_KEY_MISSION = 'okrmission'
    const LOCAL_STORAGE_KEY_OBJECTIVE = 'okrObjective'
    const LOCAL_STORAGE_KEY_KEYRESULT = 'okrKeyResult'
    const [missions, setMissions] = useState(loadFromLocal[LOCAL_STORAGE_KEY_MISSION] ?? []);
    const [objectives, setObjectives] = useState(loadFromLocal[LOCAL_STORAGE_KEY_OBJECTIVE] ?? []);
    const [keyResults, setKeyResults] = useState(loadFromLocal[LOCAL_STORAGE_KEY_KEYRESULT] ?? []);

    const addMission = (mission) =>
        setMissions([...missions, mission]);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_MISSION, JSON.stringify(missions))
    })
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_OBJECTIVE, JSON.stringify(objectives))
    })

    function deleteMission() {
        setMissions([]);
    }

    const addObjective = (objective) =>
        setObjectives([...objectives, objective]);


    function deleteObjectives() {
        setObjectives([]);
    }

    const addKeyResult = (keyResult) =>
        setKeyResults([...keyResults, keyResult]);

    function deleteKeyResults() {
        setKeyResults([]);
    }

    return (
        <OkrInStyle>
            <p>Welcome to OKR</p>
            <Infotag>Objectives and Key Results (OKR) ist eine beliebte Technik, um Ziele innerhalb einer Organisation zu setzen. Die Hauptanwendung besteht darin, Unternehmens-, Team- und persönliche Ziele zu verbinden, um messbare Ergebnisse zu erhalten. Die OKR-Methode wird von Unternehmen wie Google, Linkedin, Twitter usw. verwendet, um ihr Team bei der Erreichung ihrer Ziele zu unterstützen.</Infotag>
            <OkrNavigation />
            <OkrBigPicture />
            <OkrMissionForm submitFunction={addMission} />
            {missions.map((mission) => (
                <OkrMissionCard
                    mission={mission}
                />
            ))}
            <button onClick={deleteMission}>Delete the Mission</button>

            <OkrObjectiveForm submitFunction={addObjective} />
            {objectives.map((objective) => (
                <OkrObjectives
                    objective={objective} />
            ))}
            <button onClick={deleteObjectives}>Delete all Objectives</button>

            <KeyResultForm submitFunction={addKeyResult} />
            {keyResults.map((keyResult) => (
                <KeyResult
                    keyResult={keyResult} />
            ))}
            <button onClick={deleteKeyResults}>Delete all Key Results</button>
        </OkrInStyle>
    );
}


const OkrInStyle = styled.div`
margin-bottom: 7rem;
`

const Infotag = styled.p`
text-align: center;
border: solid 2px var(--primarypink);
border-radius: 1rem;
margin: 1rem; 
padding: 0.8rem;
background-color: white;
`
