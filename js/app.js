function loginUser() {
  var email = document.getElementById("correo").value;
  var password = document.getElementById("contraseña").value;

  console.log("Correo: " + email + ", Contraseña: " + password);

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((success) => {
      console.log('Inicio de sesión exitoso: ', success);
    })
    .catch((error) => {
      console.error('Error en el inicio de sesión: ', error);
    });
}
