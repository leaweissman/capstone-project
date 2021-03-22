import styled from 'styled-components';

export default function Okr() {
    return (
        <div>
            <p>Welcome to OKR</p>
            <Infotag>Objectives and Key Results (OKR) ist eine beliebte Technik, um Ziele innerhalb einer Organisation zu setzen. Die Hauptanwendung besteht darin, Unternehmens-, Team- und persönliche Ziele zu verbinden, um messbare Ergebnisse zu erhalten. Die OKR-Methode wird von Unternehmen wie Google, Linkedin, Twitter usw. verwendet, um ihr Team bei der Erreichung ihrer Ziele zu unterstützen.</Infotag>
        </div>
    );
}




const Infotag = styled.p`
text-align: center;
border: solid 2px var(--primarypink);
border-radius: 1rem;
margin: 1rem; 
padding: 0.8rem;
background-color: white;
`