import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";

const SmurfList = props => {

    useEffect(() => {
        getSmurfs();
    }, []);

    return (
        <div className="smurf-list">
            {props.smurfs.map(smurf => (
                <div className="smurf-card">
                    <p>Smurf Name: {smurf.name}</p>
                    <p>Age: {smurf.age}</p>
                    <p>Height: {smurf.height}</p>
                </div>
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    { getSmurfs }
)(SmurfList);