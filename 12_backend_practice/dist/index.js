import express from 'express';
const PORT = 5000;
export class Server {
    app = express();
    startSever() {
        this.app.get(`/hello`, (req, res) => {
            res.send(`Hello`);
        });
        this.app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
    }
}
new Server().startSever();
//# sourceMappingURL=index.js.map