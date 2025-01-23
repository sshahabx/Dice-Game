import { Score } from "./Score"
import { NumberSelector } from "./NumberSelector"
import styled from "styled-components"


export const Game = () => {
  return (
    <Main>
        <Score />
        <NumberSelector />
    </Main>
  )
}

const Main = styled.div`

  display: flex;
  justify-content: space-between;


`;
