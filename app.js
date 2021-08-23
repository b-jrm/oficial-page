const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Template Engine
app.set('view engine','ejs');
app.set('views',__dirname+'/views');

// Static Folder
app.use(express.static(__dirname+"/public"));

// Routers
app.get(
    '/',
    (req,res) => {
        res.render(
            'index',
            {
                tabName: 'Inicio',
                title: 'Page index'
            }
        )
    }
)
app.get(
    '/profile',
    (req,res) => {
        res.render(
            'profile',
            {
                tabName: 'Perfil',
                title: 'Page profile'
            }
        )
    }
)

// Not Found
app.use(
    (req,res) => { 
        res.status(404)
        res.render(
            '404',
            {
                tabName: 'Not Found',
                title: 'Page Not Found'
            }
        )
    }
)

// Listener
app.listen(port,() => { console.log(`Listener requests with port ${port} ...`) })


