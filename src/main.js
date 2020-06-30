import { createServer } from 'http';

const server = createServer((req, res) => {
    switch (req.url) {
        case '/status':
            res.writeHead(200, {
                'Content-Type': 'application/json',
            });
            res.write(JSON.stringify({
                status: 'Okay'
            }));
            res.end();
            return;

        default:
            res.writeHead(404);
            res.write('There\'s no route like that! Go back to our home page! ');
            res.end();
            return;
    }
});

const PORT = process.env.PORT?parseInt(process.env.PORT):8000
const HOST = process.env.HOST?process.env.HOST:'127.0.0.1'
server.listen(PORT, HOST, () => {
    console.log(`Server is listening at http://${HOST}:${PORT}`)
})