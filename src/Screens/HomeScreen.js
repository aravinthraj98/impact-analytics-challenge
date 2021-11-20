import { useEffect, useState } from "react";
import Card from "../components/Card";

function HomeScreen({ candidateData }) {
    const [data, setData] = useState([])
    useEffect(() => {
        setData(candidateData);
    }, [candidateData])
    return (
        <div className="flexcontainer">
            {data.map((value, index) => <Card key={index} data={value} />)}
        </div>
    )
}
export default HomeScreen;