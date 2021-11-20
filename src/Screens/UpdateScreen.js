import { useEffect, useState } from "react";
import Card from "../components/Card";
import UpdateCard from "../components/UpdateCard";

const { useParams } = require("react-router-dom")

function UpdateScreen({candidateData,changeStatus}){
     const {id} = useParams()
     const [candidateDetail,setCandidateDetail] =useState(null)
     console.log(id);
     useEffect(()=>{
          let data =JSON.parse(JSON.stringify(candidateData));
          let newData = data.filter((value)=>value.id==id);
          setCandidateDetail(newData[0])
          console.log(newData)
     },[candidateData,id])
    return(
        <div>
            {candidateDetail && <UpdateCard data={candidateDetail} changeStatus={changeStatus} />}
        </div>
        
    )
}
export default UpdateScreen;