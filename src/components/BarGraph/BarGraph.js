import React, { useEffect, useState } from "react";
import styled from "styled-components";

// Use either a function component
// const BarGraph = () => { ... };

// Or a class component
// class BarGraph extends React.Component { ... }

const BarGraphContainer = styled.div`
  width: 20rem;
  height: 15rem;
  border: 1px solid;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  gap: 0.25rem;
  padding: 0.25rem;
`;

const BarGraphCell = styled.div`
  width: 100%;
  min-height: 5px;
`;

const BarGraphLabelContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  padding: 0.25rem;
  justify-content: space-around;
  h1 {
    margin: 0px;
    font-size: medium;
  }
`;

const BarGraph = (props) => {
  const [maxValue, setMaxValue] = useState();

  // We find the max value to use it as reference for cell height.
  useEffect(() => {
    let _maxValue = 0;
    props.data.forEach((cell) => {
      if (cell.value > _maxValue) {
        _maxValue = cell.value;
      }
    });
    setMaxValue(_maxValue);
  }, [props]);

  return (
    <>
      {/*
        Could use <ul> and <li> but it feels pretty redundant as this is not really a list. 
      */}
      <BarGraphContainer>
        {props.data.map((cellData, index) => (
          <BarGraphCell
            style={{
              // Make sure to repeat colors.
              backgroundColor: props.colors[index % props.colors.length],
              height: `${(cellData.value / maxValue) * 100}%`,
            }}
            key={cellData.label}
          ></BarGraphCell>
        ))}
      </BarGraphContainer>
      <BarGraphLabelContainer className="bar-graph-label-container">
        {props.data.map((cellData) => (
          <h1 key={cellData.label}>{cellData.label}</h1>
        ))}
      </BarGraphLabelContainer>
    </>
  );
};

export default BarGraph;
