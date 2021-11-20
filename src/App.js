import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import HomeScreen from './Screens/HomeScreen';
import { useEffect, useState } from 'react';


function App() {
  const [candidateData,setCandidateData] = useState([]);
   const getJson=()=> {
        return fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json')
          .then(response => response.json())
          .catch(error => {
            console.error(error);
          });
      }
      useEffect(()=>{
                getJson().then(data=>{
                     for(let index in data){
                          data[index].status="status not available"
                     }
                   setCandidateData(data);
                })
      },[])

  return (
      <Router>
        <Routes>
 <Route path="/" element={<HomeScreen candidateData={candidateData} />} />
 <Route path="/:id" element={}
        </Routes>
       
      </Router>
  );
}

export default App;
