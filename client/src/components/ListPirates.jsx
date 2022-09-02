import React from "react";
import DeletePirateButton from "./DeletePirateButton";
import {useHistory} from "react-router-dom";

export default (props) => {
    const { pirates } = props;
    const history = useHistory();

    return(
        <div className="row">
            {pirates.map( (pirate,i) => {
                return(
                    <div className={"row"} key={i}>
                        <div className="col-4">
                            <img src={pirate.image} alt="pirate image" width={100} height={100}/>
                        </div>
                        <div className="col-8">
                            <h1>{pirate.name}</h1>
                            <div className="container d-flex justify-content-between align-items-center">
                                <button onClick={(e) => history.push("/pirate/show/"+pirate._id)} className="btn btn-primary">
                                    View Pirate
                                </button>
                                {<DeletePirateButton pirateId={pirate._id} />}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}