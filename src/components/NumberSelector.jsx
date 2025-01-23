import { useState } from "react";
import styled from "styled-components"

export const NumberSelector = () => {
  
  const arrNumber=[
    1,2,3,4,5,6
  ];
  

  const [selectedNum, setSelectedNum]=useState();
  console.log(selectedNum);
  

  return (
    <div>
      {
        arrNumber.map((value,i) => (
          <Box 
            isSelected={value===selectedNum}
            key={i}
            onClick={
              ()=> setSelectedNum(value)
            }
          >{value}</Box>
        ))
      }
      
    </div>
  );
};

const Box=styled.div`

  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700px;
  background-color: ${
    (props) => (props.isSelected ? "black" : "white")
  };
  color: ${
    (props) => (props.isSelected ? "white" : "black")
  }
`;