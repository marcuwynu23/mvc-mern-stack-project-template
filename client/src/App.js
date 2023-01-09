/*
 *   Copyright (c) 2023 
 *   All rights reserved.
 */
import './__init__/App.css';
import { useState, useEffect } from "react";
import fetchAPI from './api/fetchData';

function App() {
  let [status, setStatus] = useState("");
  let [data, setData] = useState([])

  useEffect(() => {
    fetchAPI.fetchHomepageData()
      .then(res => res.json())
      .then(json => {
        setStatus(json.status)
        setData(json.data)
      })
      .catch(err => console.log(err))
  }, [])


  return (
    <div className="App">
      <div className="App-header">
        <ul>
          <li>Home</li>
        </ul>
      </div>
      <div className='App-content'>
        <h1>{status}</h1>
        {data.map((d) => {
          return (<p key={d._id}>{d.name}</p>)
        })}
      </div>
    </div >

  );
}

export default App;
