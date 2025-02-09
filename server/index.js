const express = require('express'); 
const mongoose = require("mongoose");

const app = express();
const port = 5000;

const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');
const morgan = require("morgan");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(express.json());

app.use(require("cors")({
  origin: 'http://localhost:5173', 
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

mongoose.connect("mongodb://127.0.0.1:27017/bdd_rial", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connecté"))
  .catch(err => console.log("Erreur de connexion MongoDB:", err));

const bookRoute = require("./routes/bookRoute");
app.use("/api/v1", bookRoute);

app.listen(port, () => {
  console.log(`Serveur en écoute sur le port ${port}`);
});
