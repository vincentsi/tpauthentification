const express = require('express');
const mongoose = require ("mongoose");
const bodyParser = require('body-parser');
require ('dotenv').config({path:'.env'})

const Routes = require('./routes/routes');

const app = express();

const hostname = process.env.APP_HOSTNAME;
const port = process.env.APP_PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(Routes);

// Connexion à la base de données
mongoose
  .connect("mongodb+srv://subaki:test@cluster0.sjhzbsy.mongodb.net/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    // Démarrage de l'app Node une fois que la connexion Mongoose est bien établie
    app.listen(port, hostname, () =>
      console.log("API listening on http://localhost:8080/")
    )
  );

// Utilisation du router comme middleware
