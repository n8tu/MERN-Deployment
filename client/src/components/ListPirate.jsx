import React from "react";
import axios from "axios";

export default (props) => {

    const { pirate } = props;

    const changePeg = (e) => {
        axios.post("http://localhost:8000/api/pirate/peg/"+pirate._id ,{peg_leg:!pirate.peg_leg})
            .then(res => console.log(res))
    }

    const changeEye = (e) => {
        axios.post("http://localhost:8000/api/pirate/eye/"+pirate._id ,{eye_patch:!pirate.eye_patch})
            .then(res => console.log(res))
    }

    const changeHook = (e) => {
        axios.post("http://localhost:8000/api/pirate/hook/"+pirate._id ,{hook_hand:!pirate.hook_hand})
            .then(res => console.log(res))
    }

    return(
        <>
            <div className="row">
                <div className="col-6">
                    <img src={pirate.image} alt="pirate image"/>
                    <p className="display-2">{pirate.pirate_catch}</p>
                </div>
                <div className="col-6">
                    <div className="text-center">
                        <h1>About</h1>
                        <p>Position: {pirate.position}</p>
                        <p>Treasures: {pirate.treasures}</p>
                        <p>
                            Peg Leg: {pirate.peg_leg ? "Yes" : "No"}
                            |
                            <button onClick={changePeg} className="btn btn-primary">
                                {!pirate.peg_leg ? "Yes" : "No"}
                            </button>
                        </p>
                        <p>
                            Eye Patch: {pirate.eye_patch ? "Yes" : "No"}
                            |
                            <button onClick={changeEye} className="btn btn-primary">
                                {!pirate.eye_patch ? "Yes" : "No"}
                            </button>
                        </p>

                        <p>
                            Hook Hand: {pirate.hook_hand ? "Yes" : "No"}
                            |
                            <button onClick={changeHook} className="btn btn-primary">
                                {!pirate.hook_hand ? "Yes" : "No"}
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}