fetch("http://localhost:3000/tareas",
    {
    method: "GET"
})
.then(res => res.json())
    .then(data => {
        console.log(data)
    });