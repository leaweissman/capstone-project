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
background-color: #B6CE91;
border-radius: 5rem; 
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
margin: 2rem;
padding: .5rem;
`
const InfoHeaderInStyle = styled.h3`
margin: 1rem;
`
const InfoTextInStyle = styled.p`
margin: 2rem;`
