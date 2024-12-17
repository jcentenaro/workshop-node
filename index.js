const express = require("express");
const app = express();
// CREO CARPETA PUBLIC Y ACÁ DIGO EN DONDE SE ENCUENTRA
app.use(express.static("public"));
// NPM I EJS
app.set("view engine", "ejs");
app.set("views", "./src/views");
// DEFINO EL ROUTE QUE MANEJARÁ ESTE INDEX
app.use(require("./src/routes/mainRoutes"));

const PORT = 3000
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
