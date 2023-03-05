import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const USER_API = "https://jsonplaceholder.typicode.com/users"

  useEffect(() => {
    const fetchData = async () => {
      axios.get(USER_API)
        .then(result => {
          console.log('result.data:', result.data)
          // setData(result.data);
          // setShowLoading(false);
          
        }).catch((error) => {
          console.log('error in fetchData:', error)
        });
    };
    fetchData();
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <h1>Midterm Test</h1>      
      </header>
    </div>
  );
}

export default App;
