import styled from 'styled-components';

export default function OkrInfo() {
    return (
        <Infotag>Das Okr Board setzt sich aus verschiedenen Komponeten Zusammen.
            <p>Grundsätzlich zeigt es zunächst die Vision, wie etwa den "North Star"
            um diese Vision erreichen zu können werden mehrere Objectives definiert. Zu den Objectives werden im Anschluss die messbaren Key Results definiert.
            </p>
        </Infotag>
    )
}

const Infotag = styled.p`
text-align: center;
border: solid 2px var(--primarypink);
border-radius: 1rem;
margin: 1rem; 
padding: 0.8rem;
background-color: white;
`