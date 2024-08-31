// Lista de usuarios para pruebas
const users = [
    { nombre: "Juan", apellido: "Pérez", telefono: "1234567890", correo: "juan@example.com", contraseña: "1234", aceptaNotificaciones: true, rol: "Usuario", activo: true },
    { nombre: "María", apellido: "López", telefono: "0987654321", correo: "maria@example.com", contraseña: "abcd", aceptaNotificaciones: false, rol: "Usuario", activo: true },
    { nombre: "Carlos", apellido: "García", telefono: "1122334455", correo: "carlos@example.com", contraseña: "4321", aceptaNotificaciones: true, rol: "Usuario", activo: true },
    { nombre: "Ana", apellido: "Martínez", telefono: "5566778899", correo: "ana@example.com", contraseña: "dcba", aceptaNotificaciones: false, rol: "Usuario", activo: true },
    { nombre: "Admin", apellido: "Admin", telefono: "1010101010", correo: "admin@example.com", contraseña: "admin", aceptaNotificaciones: true, rol: "Administrador", activo: true }
];

// Variable para almacenar al usuario autenticado
let authenticatedUser = null;

// Función inicio de sesion
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Validar usuario
    authenticatedUser = users.find(user => user.nombre === username && user.contraseña === password);
    
    if (!authenticatedUser) {
        document.getElementById('error-message').textContent = "Usuario no encontrado";
    } else {
        //Guarda el usuario en el localStorage y lo convierte en un archi json para qeu pueda almacenarse en el localStorage
        localStorage.setItem('authenticatedUser', JSON.stringify(authenticatedUser));
        window.location.href = 'main.html';
    }
});




