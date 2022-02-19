import React from "react";
import Header from "../Header";
const Statistics = (props) => {
  return (
    <div>
      <Header text="Statistics" />
      <p>Good: {props.good}</p>
      <p>Neutral: {props.neutral}</p>
      <p>Bad: {props.bad}</p>
      <p>All: {props.all}</p>
      <p>Average: {props.avg}</p>
      <p>Positive: {props.positive} %</p>
    </div>
  );
};

export default Statistics;
