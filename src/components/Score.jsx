import styled from "styled-components"


export const Score = () => {
  return (
    <ScoreContainer>
        <h1>0</h1>
        <p>Total Score</p>
    </ScoreContainer>
  )
}

const ScoreContainer = styled.div`
max-width: 100px;
text-align: center;

    
    h1{
       font-size : 50px;
       line-height: 10px;
       margin-bottom: 0;
    }

    p{
        font-size: 20px;
        font-weight: 500;
    }


`;