import styled from 'styled-components';

export default function OkrBigPicture() {
    return (
        <p>
            <h1>This will be the big picture</h1>
            <PTagInStyle>Leitbild</PTagInStyle>
            <PTagInStyle>Moals</PTagInStyle>
            <FlexContainer>
                <SectionInStyle1>Plannings</SectionInStyle1>
                <SectionInStyle2>Weeklys</SectionInStyle2>
                <SectionInStyle3>Reviews</SectionInStyle3>
                <SectionInStyle4>Retrospektive</SectionInStyle4>
            </FlexContainer>
            <PTagInStyle>Okr-Liste (inlk. Backlog)</PTagInStyle>
            <PTagInStyle>Okr Master</PTagInStyle>

        </p>
    )
}



const PTagInStyle = styled.p`
color: var(--primaryblue);
background-color: white;
text-align: center;
`
const SectionInStyle1 = styled.section`
display: flex;
text-align: center;
color: var(--primaryblue);
background-color: white;
width: 10rem;
border-radius: 3rem;`

const SectionInStyle2 = styled.section`
display: flex;
text-align: center;
color: var(--primaryblue);
background-color: white;
width: 10rem;
border-radius: 3rem;`

const SectionInStyle3 = styled.section`
display: flex;
text-align: center;
color: var(--primaryblue);
background-color: white;
width: 10rem;
border-radius: 3rem;`

const SectionInStyle4 = styled.section`
display: flex;
text-align: center;
color: var(--primaryblue);
background-color: white;
width: 10rem;
border-radius: 3rem;`

const FlexContainer = styled.div`
display: flex;
justify-content:center;
align-content: space-around;
align-self: auto;
background-color: green;
`