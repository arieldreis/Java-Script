import express from 'express';

const app = express();
const PORT = 3010;

app.get('/', (req, resp) => {
    resp.send("<h2>Estou construindo um servidor de chat de conversas simultaneo.</h2>");
});
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
