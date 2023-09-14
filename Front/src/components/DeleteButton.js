import React from 'react';
import { CgTrash } from 'react-icons/cg';

function DeleteButton({ exercise }) {
    const deleteExercise = async function() {
        const response = await fetch("/exercises/" + exercise._id, { "method" : "DELETE" });
        if (response.status !== 204) {
            alert("Failed to delete the exercise!");
            return;
        }
        alert("Successfully deleted exercise.");
    }
    return (
        <>
            <CgTrash onClick={deleteExercise} color="red"/>
        </>
    )
}

export default DeleteButton;