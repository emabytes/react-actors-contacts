import React from 'react';
import './App.css';
import contacts from './contacts.json'
import ContactList from './ContactList';

console.log(contacts)

function App() {
  return (
    <div className="App">
      <ContactList/>
    </div>
  );
}

export default App;
