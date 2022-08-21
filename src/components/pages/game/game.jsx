import "./game.css";
import React from "react";
import { useState,useEffect } from "react";

export default function Game() {
  let [level,setLevel] = useState(0)
  let [gameTime,setGameTime] = useState({})

  useEffect(()=>{
    alert("lets play")
    setGameTime(new Date())},
  [])
  useEffect(()=>{console.log("state has been updated")},
  [level])
  useEffect(()=>{alert("whats the time?")},
  [gameTime])
  const LevelUp = () => {setLevel(level+1)}
  const UpdateTime = () => {setGameTime(new Date())}
  
  return (
    <div className="game">
      <h1>game Time</h1>
      <h2>level: {level}</h2>
      {/* <h3>{gameTime}</h3> */}
      <button onClick={LevelUp}>level up</button>
      <button onClick={UpdateTime}>Time</button>
    </div>
  );
};