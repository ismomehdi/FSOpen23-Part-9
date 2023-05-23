import express from 'express';
import calculateBmi from './bmiCalculator';

const app = express();

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

const PORT = 3003;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});