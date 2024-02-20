// main.js

const express = require('express');
const app = express();

// Définir une route pour afficher une page basique
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Page d'affichage Express</title>
      </head>
      <body>
        <h1>Bienvenue sur la page d'affichage Express</h1>
        <p>C'est une page basique avec Express.</p>
      </body>
    </html>
  `);
});

// Démarrer le serveur sur le port 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Le serveur écoute sur le port ${port}`);
});
