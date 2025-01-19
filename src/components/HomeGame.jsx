import styled from "styled-components"

export const HomeGame = ({toggle}) => {
  return (
    <Container>
       <div>
            <img src="./images/dices1.png"></img>
       </div>

        <div className="content">
            <h1>DARE TO PLAY THIS GAME?</h1>
            <Button
                onClick={toggle}
            >Play Now</Button>
        </div>
    </Container>
  )
}

export default HomeGame;


const Container = styled.div`
  max-width  : 1180px ;
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;

  .content {
    h1{
        font-size: 70px;
    }
  }

`;

const Button = styled.button`
    padding: 10px 18px;
    background: black;
    border-radius: 5px;
    color: white;


    cursor: pointer;
    min-width: 220px;
    font-size: 16px;
    border: none;
    border: 1px solid transparent;
    transition: 0.4s background ease-in;
    &:hover{
        background-color: white;
        border: 1px solid black;
        color: black;
        transition: 0.3s background ease-in;
    }
`;
