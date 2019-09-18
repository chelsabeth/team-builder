import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "./components/Form";
import TeamList from "./components/TeamList";
import data from "./data";

function App() {
  const [lists, setLists] = useState(data);
  const addNewMember = list => {
    setLists([...lists, list]);
  };
  return (
    <div className="App">
      <h1>Team Member List</h1>
      <Form addNewMember={addNewMember} />
      <TeamList addNewMember={lists}/>
    </div>
  );
}

export default App;
