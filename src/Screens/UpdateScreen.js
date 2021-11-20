const { useParams } = require("react-router-dom")

function UpdateScreen(){
     const id = useParams()
     console.log(id);
    return(
        <div>
            Hello
        </div>
    )
}
export default UpdateScreen;