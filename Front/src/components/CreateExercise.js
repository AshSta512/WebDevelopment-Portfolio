import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

function CreateExercise() {
    const createExercise = async function(body) {
        const response = await fetch("/exercises", {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status !== 201) {
            alert("Failed to create the exercise!");
            return;
        }
        alert("Successfully created a new exercise.");
    }
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [reps, setReps] = useState("");
    const [weight, setWeight] = useState("");
    const [unit, setUnit] = useState("kgs");
    const [date, setDate] = useState("");
    return (
        <>
            <form>
                <fieldset>
                    <legend>Create Exercise</legend>
                    <label>Name-
                        <input type="text" value={name} required={true} onChange={e => setName(e.target.value)} />
                    </label>
                    <br/>
                    <label>Reps-
                        <input type="number" value={reps} required={true} onChange={e => setReps(e.target.value)} />
                    </label>
                    <br/>
                    <label>Weight-
                        <input type="number" value={weight} required={true} onChange={e => setWeight(e.target.value)} />
                    </label>
                    <br/>
                    <label>Unit-
                        <select value={unit} required={true} onChange={e => setUnit(e.target.value)}>
                            <option value={"kgs"}>kgs</option>
                            <option value={"lbs"}>lbs</option>
                        </select>
                    </label>
                    <br/>
                    <label>Date-
                        <input type="text" value={date} required={true} onChange={e => setDate(e.target.value)} />
                    </label>
                </fieldset>
                <button onClick={e => {
                    e.preventDefault();
                    createExercise({
                        "name" : name,
                        "reps" : reps,
                        "weight" : weight,
                        "unit" : unit,
                        "date" : date
                    });
                    navigate("/");
                }}>Create Exercise</button>
            </form>
        </>
    )
}

export default CreateExercise;