import express from 'express';
const app = express();
import cors from 'cors';
app.use(express.json());

const PORT = 3001;
app.use(cors());

app.get('/api/ping', (_req, res) => {
    res.send('pong!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});