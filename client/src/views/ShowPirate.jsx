import React, {useContext, useEffect, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import axios from "axios";
import ListPirate from "../components/ListPirate";
import UserSession from "../context/UserSession";

export default () => {
    const { _id } = useParams();
    const [pirate,setPirate] = useState({})
    const [loaded,setLoaded] = useState(false)
    const { user } = useContext(UserSession)
    const history = useHistory();

    useEffect( () => {
        if(user == null){
            history.push("/login");
        }

        axios.get("http://localhost:8000/api/pirate/find/"+_id)
            .then(res => {
                setPirate(res.data.pirate);
                setLoaded(true);
            })
            .catch(err => console.log(err))
    },[pirate])

    return(
        <div>
            <div className="row">
                <h1>{loaded ? pirate.name : ""}</h1>
            </div>
            {<ListPirate pirate={pirate} />}
        </div>
    )
}