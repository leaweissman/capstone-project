import kanbanicon from '../../assets/kanbanicon.svg';
import styled from 'styled-components';

export default function KanbanIcon() {
    return (
        <div>
            <IconInStyle src={kanbanicon} alt='' />
        </div>
    )
}

const IconInStyle = styled.img`
width: 25%;
margin: 0;
padding: 0;`

