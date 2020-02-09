import React, { useState } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions";

const AddSmurf = props => {

    const addNewSmurf = e => {
        e.preventDefault();
        const newSmurf = {
            name,
            age,
            height
        };
        props.addSmurf(newSmurf);
    };

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');

    console.table(name, age, height);

    return (
        <div className="smurf-form">
            <form onSubmit={addNewSmurf}>
                <input
                    onChange={e => setName(e.target.value)}
                    placeholder="name"
                    value={name}
                    name="name"
                    required
                />
                <input
                    type="number"
                    onChange={e => setAge(e.target.value)}
                    value={age}
                    placeholder="age"
                    name="age"
                    required
                />
                <input
                    onChange={e => setHeight(e.target.value)}
                    placeholder="height"
                    value={height}
                    name="height"
                    required
                />
                <button type="submit">Add to the village</button>
            </form>
        </div>
    )
}

export default connect(
    null,
    { addSmurf }
)(AddSmurf);