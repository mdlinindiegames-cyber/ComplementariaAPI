fetch("http://localhost:3000/tareas", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        titulo: "HADIOS"
    })
});


