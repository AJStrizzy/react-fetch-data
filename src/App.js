import React, { useState } from 'react';
import './App.css';

function App() {
  const [object, setObject] = useState({});

  //fetch some github data
  fetch('https://api.github.com/users/facebook')
  .then(result => {
    return result.json();
  })
  .then(data => {
    //destructuring
    const { bio, location, name, login } = data;
    

    //pass the data through setObject
    setObject({bio, location, name, login})
    
  })

  return (
    <div>
      <h1>Github Profile</h1>
      <h2> Name: {object.name} </h2>
      <h2> Location: {object.location} </h2>
      <h2> Login: {object.login} </h2> 
      <h2> Bio: {object.bio} </h2>

    </div>
  );
}

export default App;
