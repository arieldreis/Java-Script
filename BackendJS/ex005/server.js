import express from 'express';
import times from './tabela.js';

const app = express();
const PORT = 3012;

app.get('/', (req, resp) => {
    resp.send(times);
});

app.listen(PORT, () => {
    console.log(`O servidor está rodando na porta ${PORT} digite o link no seu navegador http://localhost:3012`);
});