import { useEffect, useState } from "react";
import Card from "../components/Card";

function HomeScreen({ candidateData }) {
    const [data, setData] = useState([])
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
        <div className="flexcontainer">
            <input type="text" placeholder="Search" style={{width:"70%",backgroundColor:"whitesmoke",marginLeft:"15%",marginTop:"2%",height:"30px"}} onChange={handleChange} />
            {data.map((value, index) => <Card key={index} data={value} />)}
        </div>
    )
}
export default HomeScreen;