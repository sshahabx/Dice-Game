import styled from "styled-components"
import { HomeGame } from "./components/HomeGame"
import './App.css'
import { useState } from "react"
import { Game } from "./components/Game";



function App() {
  const [isGameStart, setIsGameStart]=useState(false);

  const toogleGamePlay=()=>{
    setIsGameStart((prev) => !prev);
  };

  return (
    <>
      {
        isGameStart ? <Game/> : 
        <HomeGame
            toggle={toogleGamePlay}
        />
      }
    
    </>
  );
}

export default App
