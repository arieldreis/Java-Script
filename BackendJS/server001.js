import express from 'express';

const PORT  = 3000;
const app = express();

app.get('/', (request, response) => {
    response.send('<h2>Back-end System im Js</h2>')
});
app.listen(PORT, () => {
    console.log(`Servidor escutando na porta ${PORT}`);
});