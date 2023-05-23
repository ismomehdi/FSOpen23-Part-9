import express from 'express';
import { calculateBmi } from './bmiCalculator';
import { calculateExercises } from './exerciseCalculator';

const app = express();
app.use(express.json());

app.get('/hello', (_req, res) => {
    res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
    const height = Number(req.query.height);
    const weight = Number(req.query.weight);

    if (isNaN(height) || isNaN(weight)) {
        res.status(400).send({ error: 'malformatted parameters' });
        return;
    }

    try {
        const result = calculateBmi(height, weight);
        res.send({ weight, height, bmi: result });
    } catch (e) {
        console.error(e);
        res.status(500).send({ error: 'an unexpected error occurred' });
    }
});

app.post('/exercises', (req, res) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const daily_exercises: any[] = req.body.daily_exercises;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const target: any = req.body.target;

    if (!Array.isArray(daily_exercises) || isNaN(Number(target))) {
        res.status(400).send({ error: 'malformatted parameters' });
        return;
    }

    try {
        const result = calculateExercises(daily_exercises as number[], Number(target));
        res.send({ result });    
    } catch (e) {
        console.log(e);
        res.status(500).send({ error: 'an unexpected error occurred'});
    }
});


const PORT = 3003;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});