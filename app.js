const {frutas,dinero} = require('./frutas');

const cowsay = require('cowsay');

frutas.forEach(item => {
    console.log(item); // Imprimir en consola
});

console.log(dinero);

console.log(cowsay.say({
    text: 'Hola Julian, Curso NodeJS',
    e: 'Oo',
    T: 'U'
}));

