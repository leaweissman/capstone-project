import styled from 'styled-components';

export default function OkrInfo() {
    return (
        <InfoCardInStyle>Das Okr Board setzt sich aus verschiedenen Komponeten Zusammen.
            <p>Grundsätzlich zeigt es zunächst die Vision, wie etwa den "North Star"
            um diese Vision erreichen zu können werden mehrere Objectives definiert. Zu den Objectives werden im Anschluss die messbaren Key Results definiert.
            </p>
        </InfoCardInStyle>
    )
}

const InfoCardInStyle = styled.div`
background-color: #F09939;
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
border-radius: 1rem; 
padding: 1.5rem;
margin: 2rem;
`
