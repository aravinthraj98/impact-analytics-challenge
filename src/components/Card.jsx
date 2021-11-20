function Card({ data }) {
    console.log(data)

    const getBackgroundColor = (status) => {
        if (status == "selected") {
            return "green";
        }
        else if (status == "rejected") {
            return "red";
        }
        else {
            return "yellow";
        }
    }
    return (
        <div className="card" >
            <div className="image">
                <img src={data.Image} className="icon" alt="no image" />
            </div>
            <div>
                <div className="text">Name  <b>{data && data.name}</b>



                    <p style={{ color: getBackgroundColor(data.status) }}><span style={{ color: "black" }}>Status{" "}</span> <b>{data.status}</b> </p>






                </div>
                <a href={"/" + data.id} style={{ textDecoration: "none", backgroundColor: 'blueviolet', padding: 3, borderRadius: 10, color: "white" }}>
                    Update details
            </a>
            </div>



        </div>
    )
}
export default Card;