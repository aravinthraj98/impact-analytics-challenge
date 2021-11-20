import { useEffect, useState } from "react";
import { useHref, useLocation, useNavigate } from "react-router-dom";
import HomeScreen from "./HomeScreen";

function StatusView({candidateData}){
    const navigate = useLocation()
    const goBack =useNavigate();

    const [data,setData] =useState([]);
    useEffect(()=>{
        let status="rejected";
        if(navigate.pathname==="/selected"){
                status="selected";
        }
        let tempData = JSON.parse(JSON.stringify(candidateData));
        let newData =tempData.filter((value,index)=>{
            if(value.status===status) return value;
        })
        setData(newData);


    },[])
    if(data.length===0){
        return(
            <>
             <button onClick={()=>goBack("/")} style={{backgroundColor:"blueviolet",color:"white",margin:10}}>go Back</button>
            <div style={{margin:10}}>
                No data or waiting for data
            </div>
            </>
        )
    }

    return(
        <>
        <button onClick={()=>goBack("/")} style={{backgroundColor:"blueviolet",color:"white",margin:10}}>go Back</button>
        <HomeScreen candidateData={data} />
        </>
    )
}
export default StatusView;