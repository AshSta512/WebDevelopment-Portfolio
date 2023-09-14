import React from 'react';
import ExerciseRow from './ExerciseRow';

function ExerciseTable({ exercises, setExerciseToEdit }) {
    return (
        <>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Reps</th>
                    <th>Weight</th>
                    <th>Unit</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                {exercises.map((exercise, i) => <ExerciseRow exercise={exercise} key={i} setExerciseToEdit={setExerciseToEdit} />)}
                </tbody>
            </table>
        </>
    )
}

export default ExerciseTable;