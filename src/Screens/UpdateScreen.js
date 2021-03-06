import { useEffect, useState } from 'react';
// import Card from '../components/Card';
import UpdateCard from '../components/UpdateCard';

const { useParams, useNavigate } = require('react-router-dom');

function UpdateScreen({ candidateData, changeStatus }) {
  const { id } = useParams();
  const [candidateDetail, setCandidateDetail] = useState(null);
  const goBack = useNavigate();
  //   console.log(id);

  useEffect(() => {
    let data = JSON.parse(JSON.stringify(candidateData)); //deep copying array
    let newData = data.filter((value) => value.id === id);
    setCandidateDetail(newData[0]);
    console.log(newData);
  }, [candidateData, id]);

  return (
    <div>
      <button
        onClick={() => goBack('/')}
        style={{ backgroundColor: 'blueviolet', color: 'white', margin: 10 }}
      >
        go Back
      </button>
      {candidateDetail && (
        <UpdateCard data={candidateDetail} changeStatus={changeStatus} />
      )}
      {!candidateDetail && <p>No user found on {id}</p>}
    </div>
  );
}
export default UpdateScreen;
