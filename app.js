const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname+"/public")); // Carpeta estatica public

// Routers
app.get('/profile',(req,res) => { res.send(`This page profile with express ...`) })

app.use((req,res) => { res.status(404).sendFile(__dirname+"/public/404.html") })

// Listener
app.listen(port,() => { console.log(`Listener requests with port ${port} ...`) })


