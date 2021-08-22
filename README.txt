// GIT BASH:
/*
git --version => git version 2.28.0.windows.1
git init                                                // Initialized empty Git repository in {ruta local}/.git/
git status                                              // Estado actual de modificaciones
git add app.js                                          // Agregar archivo (. para agregar todos los archivos)
git commit -m "Save version  0001"                      // Commit de cambios con un mensaje
git commit -am "Mensaje"                                // Combinacion de commit y add . de una sola vez
git commit --amend
git branch                                              // Ver la rama actual
git branch video1                                       // Crear rama llamada video1
git log                                                 // Muestra la lista de commit en orden desendente por fecha
git log --oneline                                       // Muestra los commit en una linea
git log --oneline --decorate --all --graph              // Tambien muestra los commit en lista
git status -s                                           // Muestra los archivos modificados
git status -s -b / git status -sb                       // Informacion de la rama maestra

*) Editor VIM
i                                                       // Comenzar a editar
esc                                                     // Salir del modo edición
:wq                                                     // Guardar y Salir
:q                                                      // Salir del editor sin hacer cambios
:q!                                                     // Forzar salida sin guardar

*) Creando alias globales:
git config --global alias.agregarApp "add app.js"       // Crear el alias agregarApp que ejecuta lo que esta entre comillas
git config -e                                           // Ver el archivo de configuracion y los alias existentes (Se abre editor VIM)
git config --global -l                                  // Ver configuracion sin modo de edición (Sin editor VIM)



*/