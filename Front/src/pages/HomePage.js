import React, {useEffect, useState} from 'react';
import ExerciseTable from "../components/ExerciseTable";

function HomePage( { setExerciseToEdit }) {
    const [exercises, setExercises] = useState([]);
    const loadExercises = async function() {
        const response = await fetch("/exercises", { "method" : "GET" });
        const exercises = await response.json();
        setExercises(exercises);
    }
    useEffect(function() {
       loadExercises();
    }, exercises);
    return (
        <>
            <h2>Exercises</h2>
            <ExerciseTable exercises={exercises} setExerciseToEdit={setExerciseToEdit}/>
        </>
    )
}

export default HomePage;