import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "../components/Card";

function HomeScreen({ candidateData }) {
    const [data, setData] = useState([]);
    const navigate =useNavigate()
    const location =useLocation();
    useEffect(() => {
        setData(candidateData);
    }, [candidateData])
    const handleChange =(e)=>{
        if(e.target.value===""){
            setData(candidateData);
            return;
        }
            let tempData = JSON.parse(JSON.stringify(candidateData));
            let  newData = tempData.filter((value,index)=>{
                if(value.name.toLowerCase().indexOf(e.target.value)!==-1){
                    return value;
                }
            })
            setData(newData);
    }
    return (
        <>
                      {location.pathname=="/" && <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center",marginTop:10}}>
                <div>
                    <button type="radio" style={{backgroundColor:"green",color:"whitesmoke"}}  onClick={()=>navigate("/selected")} >SHOW SELECTED </button>
                </div>
                
                 <div>
                   <button type="radio" style={{backgroundColor:"red",color:"whitesmoke"}}  onClick={()=>navigate("/rejected")} >SHOW REJECTED </button>
                </div>
                
            </div>}<br />
           
            <input type="text" placeholder="Search" style={{width:"70%",backgroundColor:"whitesmoke",marginLeft:"15%",marginTop:"2%",height:"30px"}} onChange={handleChange} />
        <div className="flexcontainer">

          
            {data.map((value, index) => <Card key={index} data={value} />)}
        </div>
        </>

    )
}
export default HomeScreen;