import React from 'react';
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

function ExerciseRow({ exercise, setExerciseToEdit }) {
    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date}</td>
            <EditButton exercise={exercise} setExerciseToEdit={setExerciseToEdit} />
            <DeleteButton exercise={exercise}/>
        </tr>
    )
}

export default ExerciseRow;