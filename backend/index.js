const express = require("express");
const app = express();

const port = 4000;

app.use(express.json());

const mongoDB = require("./db");
mongoDB();

app.get('/', (req, res) => {
    res.send('hello world');
});
app.use(express.json());
app.use('/api/v1',require("./Routes/CreateUser"));

app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
});
