// registro.js
import { registerUser } from './app.js';

// Asegúrate de que el DOM esté completamente cargado antes de intentar acceder a los elementos
window.addEventListener('DOMContentLoaded', (event) => {
    const registerForm = document.getElementById('registerForm');

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Obtiene los valores de los inputs dentro del evento de envío para asegurarse de que son actuales
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        registerUser(email, password)
            .then((userCredential) => {
                console.log('Usuario registrado:', userCredential.user);
                // Aquí podrías redirigir al usuario a otra página o limpiar el formulario, por ejemplo:
                // window.location.href = 'bienvenida.html';
            })
            .catch((error) => {
                console.error('Error en el registro:', error);
                // Aquí podrías mostrar el error en la interfaz de usuario
            });
    });
});

function registerUser() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var messageElement = document.getElementById("message"); // Asegúrate de que este ID exista en tu HTML

  firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
          // Registro exitoso
          var user = userCredential.user;
          messageElement.textContent = 'Usuario registrado con éxito';
          messageElement.className = 'success'; // Añade estilos para esta clase en tu CSS
          console.log("Usuario registrado con éxito:", user);
      })
      .catch((error) => {
          // Si hay un error, manejarlo adecuadamente
          messageElement.textContent = 'Error al registrar usuario: ' + error.message;
          messageElement.className = 'error'; // Añade estilos para esta clase en tu CSS
          console.error("Error al registrar usuario:", error);
      });
}

function closeRegister() {
  var messageElement = document.getElementById("message"); // Asegúrate de que este ID exista en tu HTML

  firebase.auth().signOut()
      .then(() => {
          // Se cerró sesión exitosamente
          messageElement.textContent = 'Cierre de sesión exitoso';
          messageElement.className = 'success'; // Añade estilos para esta clase en tu CSS
          console.log("Cierre de sesión exitoso");
          window.location.replace("/index.html");
      })
      .catch((error) => {
          // Si hay un error, manejarlo adecuadamente
          messageElement.textContent = 'Error al cerrar sesión: ' + error.message;
          messageElement.className = 'error'; // Añade estilos para esta clase en tu CSS
          console.error("Error al cerrar sesión", error.message);
      });
}

// La función `registerUser` que importas debe manejar la lógica de registro
