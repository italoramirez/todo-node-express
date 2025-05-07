require("dotenv").config();
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const taskRoutes = require("./routes/tasks");

const app = express();

mongoose.connect(`mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@localhost:27017/todo_app?authSource=admin`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("✅ Conectado a MongoDB local"))
    .catch(err => console.error("❌ Error al conectar a MongoDB:", err));

app.set('view engine', 'ejs');
app.use(expressLayouts); // Añade esto
app.set('layout', 'layout'); // Especifica que layout.ejs es tu plantilla base

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", taskRoutes);

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});