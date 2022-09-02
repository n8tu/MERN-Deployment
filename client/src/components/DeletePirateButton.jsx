import React from "react";
import axios from "axios";

export default (props) => {
    const { pirateId } = props;
    const deletePirate = (e) => {
        e.preventDefault();
        axios.delete("http://localhost:8000/api/pirate/delete/"+pirateId)
            .then(res => console.log(res.data.message))
            .catch(err => console.log(err))
    }

    return(
        <>
            <button onClick={deletePirate} className="btn btn-danger">Walk the Plank</button>
        </>
    )
}