import React from 'react';
import EditExercise from "../components/EditExercise";

function EditPage({ exerciseToEdit }) {
    return (
        <>
            <EditExercise exerciseToEdit={exerciseToEdit}/>
        </>
    )
}

export default EditPage;