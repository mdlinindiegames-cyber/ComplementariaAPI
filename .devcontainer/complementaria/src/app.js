const express = require("express");

const app = express();

app.use(express.json());

let tareas = [];
let siguienteId = 1;

// POST /tareas
app.post("/tareas", (req, res) => {
    const { titulo } = req.body;

    if (!titulo) {
        return res.status(400).json({
            error: "El título es obligatorio"
        });
    }

    const tarea = {
        id: siguienteId++,
        titulo,
        completada: false
    };

    tareas.push(tarea);

    res.status(201).json(tarea);
});

// GET /tareas
app.get("/tareas", (req, res) => {
    res.json(tareas);
});

// PUT /tareas/:id
//PUT MODIFICAR
app.put("/tareas/:id", (req, res) => {
    const id = Number(req.params.id);
    const tarea = tareas.find(t => t.id === id);

    if (!tarea) {
        return res.status(404).json({
            error: "Tarea no encontrada"
        });
    }

    if (typeof req.body.completada !== "boolean") {
        return res.status(400).json({
            error: "El campo completada debe ser booleano"
        });
    }

    tarea.completada = req.body.completada;

    res.json(tarea);
});

// DELETE /tareas/:id
app.delete("/tareas/:id", (req, res) => {
    const id = Number(req.params.id);
    const indice = tareas.findIndex(t => t.id === id);

    if (indice === -1) {
        return res.status(404).json({
            error: "Tarea no encontrada"
        });
    }

    tareas.splice(indice, 1);

    res.status(204).send();
});

module.exports = app;





