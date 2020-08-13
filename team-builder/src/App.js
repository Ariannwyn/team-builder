import React, { useState } from 'react';
import Form from './components/Form';
import './App.css';
import FormResults from './components/FormResults';

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
      <FormResults teamMember={teamMember}/>
    </div>
  );
}

export default App;
