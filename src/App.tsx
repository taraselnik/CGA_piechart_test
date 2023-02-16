import React, { useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import { fetchData } from './utils/fetchIncidents';

function App() {

  useEffect(() => {
    console.log(fetchData())
  }, [])
  
  return (
    <div>hello</div>
  );
}

export default App;
