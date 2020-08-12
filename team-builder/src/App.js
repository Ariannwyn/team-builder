import React, { useState } from 'react';
import Form from './components/Form';
import './App.css';

function App() {
const [teamMember, setTeamMember] = useState([{
  id: '1', 
  name: 'Emily',
  email: 'email@gmail.com',
  role: 'Web developer'
}])

const addNewMember = member => {
  const newMember = {
    id: Date.now(), 
    name: member.name,
    email: member.email,
    role: member.role
  };
  setTeamMember([...teamMember, newMember])
}



  return (
    <div className="App">
      <h1>Team Builder</h1>
      <Form addNewMember={addNewMember}/>
      <p>{teamMember.name}</p>
    </div>
  );
}

export default App;
