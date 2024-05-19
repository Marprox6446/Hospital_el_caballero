const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Aquí puedes agregar la lógica de autenticación
  // Por ahora, simplemente mostramos los datos ingresados
  console.log('Correo electrónico:', email);
  console.log('Contraseña:', password);
});

// Función para verificar las credenciales de inicio de sesión
function iniciarSesion(email, contraseña) {
  if (email === 'admin@example.com' && contraseña === 'contraseñaadmin') {
      // Redirigir al panel de administración
      window.location.href = 'admin.html';
  } else {
      // Verificar credenciales de usuario normal...
  }
}
