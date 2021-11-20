import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import { useEffect, useState } from 'react';
import UpdateScreen from './Screens/UpdateScreen';
import StatusView from './Screens/StatusView';

function App() {
  const [candidateData, setCandidateData] = useState([]);
  const getJson = () => {
    return fetch(
      'https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json'
    )
      .then((response) => response.json())
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    // if(candidateData.length===0){
    getJson().then((data) => {
      for (let index in data) {
        data[index].status = 'status not available';
      }
      setCandidateData(data);
    });
    // alert('fetching');
    // }
  }, []);
  const changeStatus = (id, status) => {
    let tempData = JSON.parse(JSON.stringify(candidateData));
    let newData = [];
    tempData.map((value, index) => {
      if (id === value.id) {
        value.status = status;
      }
      newData.push(value);
    });
    setCandidateData([...newData]);
  };

  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={<HomeScreen candidateData={candidateData} />}
        />
        <Route
          path='/:id'
          element={
            <UpdateScreen
              candidateData={candidateData}
              changeStatus={changeStatus}
            />
          }
        />
        <Route
          path='/selected'
          element={<StatusView candidateData={candidateData} />}
        />
        <Route
          path='/rejected'
          element={<StatusView candidateData={candidateData} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
