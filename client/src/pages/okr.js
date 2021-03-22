import { useState, useEffect } from 'react';
import loadFromLocal from '../components/kanbancomponents/lib/loadFromLocal';
import styled from 'styled-components';
import OkrNavigation from '../components/okrcomponents/Detailspages/OkrNavigation';
import OkrBigPicture from '../components/okrcomponents/OkrBigPicture';
import OkrMissionCard from '../components/okrcomponents/Mission/OkrMissionCard';
import OkrMissionForm from '../components/okrcomponents/Mission/OkrMissionForm';

export default function Okr() {
    const LOCAL_STORAGE_KEY_MISSION = 'okrmission'
    const [missions, setMissions] = useState(loadFromLocal[LOCAL_STORAGE_KEY_MISSION] ?? []);

    const addMission = (mission) =>
        setMissions([...missions, mission]);
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_MISSION, JSON.stringify(missions))
    })

    function deleteMission() {
        setMissions([]);
    }
    return (
        <OkrInStyle>
            <p>Welcome to OKR</p>
            <Infotag>Objectives and Key Results (OKR) ist eine beliebte Technik, um Ziele innerhalb einer Organisation zu setzen. Die Hauptanwendung besteht darin, Unternehmens-, Team- und persönliche Ziele zu verbinden, um messbare Ergebnisse zu erhalten. Die OKR-Methode wird von Unternehmen wie Google, Linkedin, Twitter usw. verwendet, um ihr Team bei der Erreichung ihrer Ziele zu unterstützen.</Infotag>
            <OkrNavigation />
            <OkrBigPicture />
            <OkrMissionForm submitFunction={addMission} />
            {missions.map((mission) => (
                <OkrMissionCard mission={mission} />
            ))}
            <button onClick={deleteMission}>Delete the Mission</button>

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
