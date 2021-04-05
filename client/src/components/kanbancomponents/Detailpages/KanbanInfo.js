import styled from 'styled-components';

export default function KanbanInfoTag() {
    return (
        <Infotag>Kanban ist eine Methode der
        Produktionsprozesssteuerung. Das
        Vorgehen orientiert sich ausschließlich
        am tatsächlichen Verbrauch von
        Materialien am Bereitstell- und
        Verbrauchsort. Kanban ermöglicht
        eine Reduktion der lokalen Bestände
        von Vorprodukten in und nahe der
        Produktion, die dort in Produkten der
        nächsten Integrationsstufe verbaut werden. </Infotag>
    )
}

const Infotag = styled.p`
color: white;
text-align: center;
border-radius: .5rem;
margin: 1rem; 
padding: 0.8rem;
background-color: #D6846B;
`