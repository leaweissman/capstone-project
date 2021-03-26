import styled from 'styled-components';

export default function KeyResultsInfo() {
    return (
        <InfoCardInStyle>
            <InfoHeaderInStyle>Was ist ein Key Result?</InfoHeaderInStyle>
            <InfoTextInStyle>Das Key Result hilft bei der Antwort, Woher weiß ich, dass ich an meinem Ziel (definiert in meinem Objectives) angekommen bin?
                <p>Nachdem die Objectives nun definiert sind (sind sie es nicht lies doch nocheinmal die Information darüber durch!) wird deutlich, dass die Objectives zwar motivierend sind, jedoch kennt man selbst häufig, dass zwar das Ziel den Marathon zu Laufen motiviert, jedoch häufig eine Floskel bleibt an die man sich erinnert, einen jedoch nicht displiniert oder zum End-Ergebnis führt.</p>
                <p>Um einen konkreten und realistischen Weg dorthin zu verfolgen setzt man sich nun also KeyResults. "Was genau muss getan werden um das Übergeorndete Ziel (Objective) zu erreichen?"</p>
                <p>Wichtig ist hier, dass pro Objectives maximal vier Key Results definiert werden sollten.</p>
                <p>Nachdem es im Objectives vorrangig darum ging eine qualitative Mini-Vision zu schaffen ist es jetzt umso wichtiger den qualitativen Aspekt messbar zu machen.</p>
                <p>Es gelten die folgenden Kriterien bei der Formulierung von Key Results:</p>
                <ul>
                    <li>Ergebnisorientiert</li>
                    <li>Messbar</li>
                    <li>Akzeptiert vom Team</li>
                    <li>Ambitioniert aber realistisch</li>
                </ul>
                <p>Die Milestones:</p>
                <p>Ist ein Key Result so strukturiert, dass es nur "geschafft" oder eben "nicht-geschafft" werden kann, ist es sinnvoll messbare Milestones zu definieren. Ein Beispiel hierfür kann sein: Das Key Result war es ein tolles Fest zu feiern.</p>
                <p>Was sind also die Bestandteile hierfür?</p>
                <ul>
                    <li>Location organisieren (25%)</li>
                    <li>Catering bestellen (20%)</li>
                    <li>Dekoration fertigstellen (20%)</li>
                    <li>Einladung verschicken (15%)</li>
                </ul>
                <p>Dies ermöglicht die Key Results konkret messbar zu machen, sofern diese das nicht direkt sind.</p>
                <p>Insgesamt sollte ein Ampelsystem etabliert werden, in welchem deutlich wird, wie man sich in den einzelnen Key Results schlägt, wo steht man im Verhältnis zur angegebenen Zeitspanne. So ist eine erreichung von 0-69% etwa im roten Bereich, eine Erreichung zwischen 70 - 89% im gelben und eine Erreichung zwischen 90 -100% im grünen Bereich.</p>
            </InfoTextInStyle>
        </InfoCardInStyle>
    );
}

const InfoCardInStyle = styled.div`
background-color: white;
border-radius: 5rem; 
border: 2px solid var(--primarypink);
margin: 2rem;
`
const InfoHeaderInStyle = styled.h3`
text-align:center;
margin: 1rem;
`
const InfoTextInStyle = styled.p`
margin: 2rem;`
