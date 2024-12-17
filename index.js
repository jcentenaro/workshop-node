const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
// CREO CARPETA PUBLIC Y ACÁ DIGO EN DONDE SE ENCUENTRA
app.use(express.static("public"));
// LE PIDO QUE USE LAS CONST QUE AGREGO ARRIBA X EJEMPLO AL INSALAR NPM I EJS
app.set("view engine", "ejs");
app.set("views", "./src/views");
// LE DIGO QUE UTILICE LAYOUTS Y EN DONDE
app.use(expressLayouts);
app.set("layout", "layouts/layout")
// DEFINO EL ROUTE QUE MANEJARÁ ESTE INDEX
app.use(require("./src/routes/mainRoutes"));

const PORT = 3001
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
