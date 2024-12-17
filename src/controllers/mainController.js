let tareas = [
    { id: 1, title: "Titulo 1", completed: false},
    { id: 2, title: "Titulo 2", completed: false},
    { id: 3, title: "Titulo 3", completed: false}, 
];

const index = (req, res) => {
    res.render("index", { tareas });
};

const store = (req, res) => {
    const tarea = {
        id: Date.now(),
        title: req.body.title,
        complete: false
    };
    
    tareas.push(tarea);

    res.redirect("/");
};

//VOY EXPORTANDO LAS FUNCIONES QUE CREO ARRIBA
module.exports = {
    index,
    store
};
