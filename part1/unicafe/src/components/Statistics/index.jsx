import React from "react";
import Header from "../Header";
import StatisticLine from "../StatisticLine";
const Statistics = (props) => {
  if (props.good !== 0 || props.neutral !== 0 || props.bad !== 0) {
    return (
      <div>
        <Header text="Statistics" />
        <table>
          <tr>
            <StatisticLine text="Good" value={props.good} />
          </tr>
          <tr>
            <StatisticLine text="Neutral" value={props.neutral} />
          </tr>
          <tr>
            <StatisticLine text="Bad" value={props.bad} />
          </tr>
          <tr>
            <StatisticLine text="All" value={props.all} />
          </tr>
          <tr>
            <StatisticLine text="Average" value={props.avg} />
          </tr>
          <tr>
            <StatisticLine text="Positive" value={props.positive} />
          </tr>
        </table>
      </div>
    );
  }
  return (
    <div>
      <Header text="Statistics" />
      <p>No feedback given</p>
    </div>
  );
};

export default Statistics;
