// Función para cerrar sesión
function logout() {
    localStorage.removeItem('authenticatedUser');
    window.location.href = 'index.html';
}

// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    const btnLogout = document.getElementById('logout-button');

    // Verificar si el botón de cierre de sesión se encuentra en el DOM
    if (btnLogout) {
        btnLogout.addEventListener('click', function () {
            console.log("click");
            logout(); // Llama a la función de cerrar sesión cuando se hace clic en el botón
        });
    } else {
        console.error("El botón de cerrar sesión no se encontró en el DOM.");
    }
});


// Función para mostrar la lista de usuarios
function renderUserList() {
    const userList = document.getElementById('user-list');
    userList.innerHTML = ''; // Limpiar la lista antes de renderizar

    users.forEach((user, index) => {
        const li = document.createElement('li');
        li.textContent = `${user.nombre} ${user.apellido} - ${user.rol} - ${user.activo ? 'Activo' : 'Inactivo'}`;

        // Botón para activar/desactivar usuarios
        const toggleButton = document.createElement('button');
        toggleButton.textContent = user.activo ? 'Desactivar' : 'Activar';
        toggleButton.onclick = () => toggleUserStatus(index);

        li.appendChild(toggleButton);
        userList.appendChild(li);
    });
}

// Función para activar/desactivar usuarios
function toggleUserStatus(index) {
    users[index].activo = !users[index].activo; // Cambiar el estado activo del usuario
    renderUserList(); // Volver a renderizar la lista para actualizar los cambios
}

// Mostrar la información del usuario autenticado y gestión de usuarios
document.addEventListener('DOMContentLoaded', function () {
    const userInfoDiv = document.getElementById('user-info');
    const adminSection = document.getElementById('admin-section');
    const authenticatedUser = JSON.parse(localStorage.getItem('authenticatedUser'));

    if (authenticatedUser) {
        userInfoDiv.innerHTML = `
            <p id="Tittle_user"><b>Usuario Autenticado</b></p>
            <p><b>Nombre:</b> ${authenticatedUser.nombre} ${authenticatedUser.apellido}</p>
            <p><b>Teléfono:</b>  ${authenticatedUser.telefono}</p>
            <p><b>Correo:</b>  ${authenticatedUser.correo}</p>
            <p><b>Notificaciones:</b>  ${authenticatedUser.aceptaNotificaciones ? 'Sí' : 'No'}</p>
            <p><b>Rol:</b>  ${authenticatedUser.rol}</p>
        `;

        // Mostrar la sección de administración si el usuario es un administrador
        if (authenticatedUser.rol === 'Administrador') {
            adminSection.style.display = 'block';
            renderUserList();
        }
    }
});