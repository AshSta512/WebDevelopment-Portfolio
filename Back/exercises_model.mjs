import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);

const db = mongoose.connection;

const exercisesSchema = mongoose.Schema({
    name: { type: String, required: true },
    reps: { type: Number, required: true },
    weight: { type: Number, required: true },
    unit: { type: String, required: true },
    date: { type: String, required: true }
}, { collection: "exercises" });

const Exercises = mongoose.model("Exercise", exercisesSchema);

function isValidDate(date) {
    let components = date.split("-");
    if (components.length !== 3) {
        return false;
    }
    for (let c of components) {
        if (c.toString().length !== 2)
            return false;
    }
    let month = parseInt(components[0], 10);
    let day = parseInt(components[1], 10);
    let year = parseInt(components[2], 10);
    if (isNaN(month) || isNaN(day) || isNaN(year)) {
        return false;
    }
    let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    // Leap year
    if (year % 4 === 0) {
        daysInMonth[1] = 29
    }
    return day > 0 && day <= daysInMonth[month - 1];
}

function isValidBody(query) {
    const name = query.name;
    if (name === null || name === undefined || name.length < 1) {
        return false;
    }
    const reps = query.reps
    if (reps === null || reps < 1) {
        return false;
    }
    const weight = query.weight;
    if (weight === null || weight < 1) {
        return false;
    }
    const unit = query.unit;
    if (unit === null || unit !== "kgs" && unit !== "lbs") {
        return false;
    }
    const date = query.date;
    return !(date === null || !isValidDate(date));
}

async function createExercise(query) {
    if (!isValidBody(query)) {
        throw Error;
    }
    return new Exercises(query).save();
}

async function retrieveAllExercises() {
    return Exercises.find().exec();
}

async function retrieveExerciseByID(id) {
    return Exercises.findById(id).exec();
}

async function updateExerciseByID(id, query) {
    if (!isValidBody(query)) {
        throw Error
    }
    return Exercises.findByIdAndUpdate(id, query).exec();
}

async function deleteExerciseByID(id) {
    return Exercises.findByIdAndDelete(id).exec();
}

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

export {
    createExercise,
    retrieveAllExercises,
    retrieveExerciseByID,
    updateExerciseByID,
    deleteExerciseByID
};