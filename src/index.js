const express = require('express');
const port = 3333;

const app = express();

app.use(express.json());

app.get("/courses", (req, res) => {
    const query = req.query;
    console.log(query);
    return res.json(["Curso1", "Curso2", "Curso3"]);
});

app.post("/courses", (req, res) => {
    const body = req.body;
    console.log(body);
    return res.json(["Curso1", "Curso2", "Curso3", "Curso4"]);
});

app.put("/courses/:id", (req, res) => {
    const { id } = req.params;
    console.log(id);
    return res.json(["Curso6", "Curso2", "Curso3", "Curso4"]);
});

app.path("/courses/:id", (req, res) => {
    return res.json(["Curso6", "Curso7", "Curso3", "Curso4"]);
});

app.delete("/courses/:id", (req, res) => {
    return res.json(["Curso6", "Curso2", "Curso4"])
})

app.listen(port);