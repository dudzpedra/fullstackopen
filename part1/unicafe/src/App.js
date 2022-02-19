import { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";
import Statistics from "./components/Statistics";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [avg, setAvg] = useState(0);
  const [positive, setPositive] = useState(0);

  useEffect(() => {
    setAll(good + bad + neutral);
    console.log(all);
  }, [good, neutral, bad, all]);

  useEffect(() => {
    setAvg((good - bad) / all);
  }, [good, bad, all]);

  useEffect(() => {
    setPositive((good / all) * 100);
  }, [good, all]);

  return (
    <div className="App">
      <Header text="Give Feedback" />
      <Button onClick={() => setGood(good + 1)} text="Good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button onClick={() => setBad(bad + 1)} text="Bad" />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        avg={avg}
        positive={positive}
      />
    </div>
  );
}

export default App;
