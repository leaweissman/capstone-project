import styled from 'styled-components';

export default function OkrHistory() {
    return (
        <InfoCardInStyle>
            <InfoHeaderInStyle>Customized info about History of Okr</InfoHeaderInStyle>
            <InfoTextInStyle>Die OKR-Methode kam 1999 bei Google an, als Venture-Capital Legende John Doerr dies bei Larry Page und Sergey Brin.

            Diese OKR-Modelle werden seitdem bei Google eingesetzt - und es sieht ja wirklich so aus, dass Google seit den 90er Jahren ein gutes Wachstum erzielt hat.
<p>OKRs wurden zuerst bei Intel eingeführt,[7] als Intel-Mitgründer Andrew Grove das System in Anlehnung an Managementmethoden wie MBO (Management by Objectives) und SMART (Specific Measurable Accepted Realistic Time Bound) entwickelte. Eine breitere Aufmerksamkeit erfuhr OKR durch den Einsatz beim Suchmaschinenanbieter Google,[8] der die Methode seit 1999 nutzt und seitdem dauerhaft im Einsatz hat. Durch die Arbeit des bekannten US-Managers John Doerr, der die OKR-Methode mit seiner Beteiligungsgesellschaft Kleiner Perkins Caufield & Byers proklamierte, setzten mit der Zeit weitere bekannte Wachstumsunternehmen den Ansatz ein, darunter das Business-Netzwerk LinkedIn[9] oder der Spieleentwickler Zynga. Für die Umsetzung des Rahmenwerks sind gängige Intranetlösungen zur Datenablage genügend, dennoch haben sich mit der zunehmenden Verbreitung auch eine ganze Reihe von Software-Werkzeugen zur Umsetzung von OKR[10] etabliert.

Während Andrew Grove die Methode in seinem Buch auf zwei Seiten beschreibt,[11] sind die „Lehrbücher“ und Software-Werkzeuge heute stark aufgebläht.</p></InfoTextInStyle>
        </InfoCardInStyle>
    );
}

const InfoCardInStyle = styled.div`
background-color: #F09939;
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
border-radius: 1rem; 
padding: .5rem;
margin: 2rem;
`
const InfoHeaderInStyle = styled.h3`
text-align:center;
margin: 1rem;
`
const InfoTextInStyle = styled.p`
margin: 2rem;`
