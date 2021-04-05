import styled from 'styled-components';

export default function ObjectivesInfo() {
    return (
        <InfoCardInStyle>
            <InfoHeaderInStyle>What is an Objective?</InfoHeaderInStyle>
            <InfoTextInStyle>Das Objective hilft bei der Frage: Wo möchte ich hingehen?</InfoTextInStyle>
            <p>Objectives sind den Key Results übergeordnet und stehen am Anfang des OKR-Zyklus. Die Kernfrage ist hier: "Was müssen wir konkret in den nächsten drei (oder vier) Monaten in den Fokus stellen um unsere Moals zu verfolgen?"</p>
            <p>Es ist wichtig die Objectives richtig zu formulieren. So könnte ein Objective etwa sein:
                <br />
                Ich möchte perfekt für den New York Marathon vorbereitet sein!
                <br />
                Dieses Ziel is motivierend, übergeordnet und vor allem qualitativ.
            </p>
            <p>
                Das Objective, als qualitatives Ziel, beschreibt vor allem die gewünschte Zielrichtung. Es sagt präzise aus, was die Organisation im nächsten Zyklus erreichen möchte.
            </p>
            <p>Objectives können also als eine Art Mini-Vision gesehen werden, ähnlich wie die Vision zielen die Objectoves darauf ab sich oder das Team zu motivieren alles für die Erreichung dieses Übergeordneten Ziels zu tun.</p>
            <p>Ein Objective sollte daher die folgenden Eigenschaften haben:
                <ul>
                    <li>Visionsorientiert</li>
                    <li>Aktivierend</li>
                    <li>Positiv</li>
                    <li>Verständlich für alle im Unternehmen</li>
                    <li>Zeitraum: 3-4 Monate</li>
                </ul>
            </p>
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
