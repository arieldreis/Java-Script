import {WebSocketServer} from 'ws';
import { createServer } from 'http';
import express from 'express';

const app = express();
const server = createServer(app);
const wss = new WebSocketServer({server});
const PORT = 3010;

wss.on('connection', (ws) => {
    console.log("Cliente conectado");
    ws.on('message', (mensagem) => {
        console.log("Mensagem recebida: ", mensagem.toString());

        // Repassar a mensagem para todos os outros clientes conectados
        wss.clients.forEach((client) => {
            if(client.readyState === 1){
                client.send(mensagem.toString());
            }
        });
    });
});

server.listen(PORT, () => {
    console.log(`Servidor WebSockets HTTP rodando na porta ${PORT}`);
});