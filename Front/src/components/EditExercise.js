import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";

function EditExercise({ exerciseToEdit }) {
    const editExercise = async function(body) {
        const response = await fetch("/exercises/" + exerciseToEdit._id, {
            method: "PUT",
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status !== 200) {
            alert("Failed to update the exercise!");
            return;
        }
        alert("Successfully updated the exercise.");
    }
    const navigate = useNavigate();
    const [name, setName] = useState(exerciseToEdit.name);
    const [reps, setReps] = useState(exerciseToEdit.reps);
    const [weight, setWeight] = useState(exerciseToEdit.weight);
    const [unit, setUnit] = useState(exerciseToEdit.unit);
    const [date, setDate] = useState(exerciseToEdit.date);
    return (
        <>
            <form>
                <fieldset>
                    <legend>Edit Exercise</legend>
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
                    editExercise({
                        "name" : name,
                        "reps" : reps,
                        "weight" : weight,
                        "unit" : unit,
                        "date" : date
                    });
                    navigate("/");
                }}>Update Exercise</button>
            </form>
        </>
    )
}

export default EditExercise;