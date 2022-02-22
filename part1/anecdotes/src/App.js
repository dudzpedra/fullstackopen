import "./App.css";

import { useEffect, useState } from "react";
import Title from "./components/Title";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  const [mostVoted, setMostVoted] = useState(0)
  
  const setRandom = () => {
    const randomValue = Math.random() * anecdotes.length;
    setSelected(randomValue.toFixed(0));
  };
  
  const handleVote = () => {
    const copy = [...votes];
    copy[selected]++;

    const max = Math.max(...copy)
    const maxIndex = copy.indexOf(max)
    
    setVotes(copy);
    setMostVoted(maxIndex)
  };
  

  return (
    <div className="App">
      <Title text="Anecdote of the day" />
      <p>{anecdotes[selected]}</p>
      <p> has {votes[selected]} votes</p>
      <div>
        <button className="btn-random" onClick={handleVote}>
          Vote
        </button>
        <button className="btn-random" onClick={setRandom}>
          Random Anecdote
        </button>
      </div>
      <Title text='Most voted Anecdote' />
      <p>{anecdotes[mostVoted]}</p>
      <p> has {votes[mostVoted]} votes</p>
    </div>
  );
};

export default App;
