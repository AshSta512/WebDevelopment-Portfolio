import React from 'react';
import { useNavigate } from "react-router-dom";
import { MdEdit } from 'react-icons/md';

function EditButton({ exercise, setExerciseToEdit }) {
    const navigate = useNavigate();
    const onClick = async function() {
        setExerciseToEdit(exercise);
        navigate("/edit");
    }
    return (
        <>
            <MdEdit onClick={onClick} color="deepskyblue"/>
        </>
    )
}

export default EditButton;