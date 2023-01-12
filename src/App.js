import React from 'react';
import StudentList from './Components/StudentList';
import './App.css';
import { useEffect, useState } from 'react'

const API_URL = "http://localhost:9000"

function App() {
const [studentData, setStudentData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${API_URL}/students`)
      const json = await res.json()
      console.log(json)
      const { data } = json;
      setStudentData(data)
    }
    fetchData();
  },[] )

  return (
    <div className="App">
      <h1>Ayyy, bruh!</h1>
      <StudentList/>
    </div>
  );
}

export default App;
