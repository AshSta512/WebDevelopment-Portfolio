import 'dotenv/config';
import express from 'express';
import * as exercises from './exercises_model.mjs';

const app = express();

const PORT = process.env.PORT;

app.use(express.json());

app.post("/exercises", async (req, res) => {
    exercises.createExercise(req.body)
        .then(exercise => {
            res.status(201).send(exercise);
        })
        .catch(error => {
            res.status(400).send({ "Error" : "Invalid request"});
        });
});

app.get("/exercises", async (req, res) => {
    exercises.retrieveAllExercises()
        .then(exercise => {
            res.status(200).send(exercise);
        })
        .catch(error => {
            res.status(400).send({ "Error" : "Invalid request"});
        });
});

app.get("/exercises/:id", async (req, res) => {
    exercises.retrieveExerciseByID(req.params.id)
        .then(exercise => {
            if (exercise === null) {
                res.status(404).send({ "Error" : "Not found"});
            } else {
                res.status(200).send(exercise);
            }
        })
        .catch(error => {
            res.status(400).send({ "Error" : "Invalid request"});
        });
});

app.put("/exercises/:id", async (req, res) => {
    exercises.updateExerciseByID(req.params.id, req.body)
        .then(exercise => {
            if (exercise === null) {
                res.status(404).send({ "Error" : "Not found"});
            } else {
                res.status(200).send(exercise);
            }
        })
        .catch(error => {
            res.status(400).send({ "Error" : "Invalid request"});
        });
});

app.delete("/exercises/:id", async (req, res) => {
    exercises.deleteExerciseByID(req.params.id)
        .then(exercise => {
            if (exercise === null) {
                res.status(404).send({ "Error" : "Not found"});
            } else {
                res.status(204).send();
            }
        })
        .catch(error => {
            res.status(400).send({ "Error" : "Invalid request"});
        });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});