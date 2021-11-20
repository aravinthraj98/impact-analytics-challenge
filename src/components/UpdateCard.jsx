import { getBackgroundColor } from "../helper/util";
import { useNavigate } from 'react-router-dom';

function UpdateCard({ data, changeStatus }) {
    const navigate = useNavigate()
    console.log(data)
    const handlePress = (e) => {
        changeStatus(e.target.value, e.target.name);
        navigate("/")


    }

    return (
        <div className="container">
            <div className="image" style={{ backgroundColor: "black", marginTop: "8%" }}>
                {/* <b>IMPACT CANDIDATE</b> */}
                <img src={data.Image} className="icon" />
                <p style={{ color: getBackgroundColor(data.status) }} >{data.status}</p>
            </div>
            <div className="flexcontainer" style={{ padding: 10, justifyContent: "center" }} >
                <button className="button" style={{ backgroundColor: "green", color: "white" }} value={data.id} name="selected" onClick={handlePress}>select</button>
                <button value={data.id} style={{ backgroundColor: "red", color: "white" }} onClick={handlePress} className="button" name="rejected">Reject</button>
            </div>
        </div>
    )
}
export default UpdateCard;