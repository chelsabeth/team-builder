import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "./components/Form";
import TeamList from "./components/TeamList";


function App() {
  return (
    <div className="App">
      <TeamList/>
      <Form/>
    </div>
  );
}

export default App;
