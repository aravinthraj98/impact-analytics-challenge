import { useNavigate } from "react-router-dom";
import { getBackgroundColor } from "../helper/util"
function Card({ data }) {
    console.log(data)
    const navigate = useNavigate();

    // const getBackgroundColor = (status) => {
    //     if (status == "selected") {
    //         return "green";
    //     }
    //     else if (status == "rejected") {
    //         return "red";
    //     }
    //     else {
    //         return "yellow";
    //     }
    // }

    return (
        <div className="card" >
            <div className="image">
                <img src={data.Image} className="icon" alt="no image" />
            </div>
            <div style={{ width: "60%" }}>
                <div className="text">Name  <b>{data && data.name}</b>



                    <p style={{ color: getBackgroundColor(data.status) }}><span style={{ color: "black" }}>Status{" "}</span> <b>{data.status}</b> </p>






                </div>
                <p onClick={() => navigate("/" + data.id)} style={{ textDecoration: "none", backgroundColor: 'blueviolet', padding: 3, borderRadius: 10, color: "white" }} >
                    Update details
            </p>
            </div>



        </div>
    )
}
export default Card;