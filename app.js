// Tutorial Youtube - Video 1
// https://youtu.be/mG4U9t5nWG8

// Ver version de NodeJS => node -v

// Crear archivo app.js
const frutas = ['platano','manzana','platano','pera'];

// Recorrer arreglo
frutas.forEach(item => {
    console.log(item); // Imprimir en consola
});
// Ejecutar en consola => node app
/*
IMPRESION EN CONSOLA:
platano
manzana
platano
pera
*/

// GIT BASH:
/*
git --version => git version 2.28.0.windows.1
git init                                                // Initialized empty Git repository in {ruta local}/.git/
git status                                              // Estado actual de modificaciones
git add app.js                                          // Agregar archivo (* para agregar todos los archivos)
git commit -m "Save version  0001"                      // Commit de cambios con un mensaje
git branch                                              // Ver la rama actual
git branch video1                                       // Crear rama llamada video1
git log                                                 // Muestra la lista de commit en orden desendente por fecha
git log --oneline                                       // Muestra los commit en una linea
git log --oneline --decorate --all --graph              // Tambien muestra los commit en lista
git status -s                                           // Muestra los archivos modificados
git status -s -b / git status -sb                       // Informacion de la rama maestra

*) Creando alias globales:
git config --global alias.agregarApp "add app.js"       // Crear el alias agregarApp que ejecuta lo que esta entre comillas
git config -e                                           // Ver el archivo de configuracion y los alias existentes (Se abre editor VIM)
:q                                                      // Salir del modo editor de VIM
git config --global -l                                  // Ver configuracion sin modo de edición (Sin editor VIM)


*/

