import styled from 'styled-components';
export default function ScrumInfoTag() {
    return (
        <InfoCardInStyle>
            <InfoHeaderInStyle>Here some Info about Scrum</InfoHeaderInStyle>
            <InfoTextInStyle>Scrum (aus englisch scrum für „Gedränge“) ist ein Vorgehensmodell des Projekt- und Produktmanagements, insbesondere zur agilen Softwareentwicklung. Es wurde ursprünglich in der Softwaretechnik entwickelt, ist aber davon unabhängig. Scrum wird inzwischen in vielen anderen Bereichen eingesetzt.[1] Es ist eine Umsetzung von Lean Development für das Projektmanagement.[2][3] </InfoTextInStyle>
        </InfoCardInStyle>
    )
}
const InfoCardInStyle = styled.div`
background-color: white;
border-radius: 5rem; 
border: 2px solid var(--primarypink);
margin: 2rem;
`
const InfoHeaderInStyle = styled.h3`
margin: 1rem;
`
const InfoTextInStyle = styled.p`
margin: 2rem;`
