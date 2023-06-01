<!DOCTYPE html>
<html>
<head>
  <title>Inicio de sesión</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css">
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f2f2f2;
      padding: 20px;
    }
    .container {
      max-width: 500px;
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 5px;
      padding: 20px;
    }
    h2 {
      text-align: center;
    }
    .form-group {
      margin-bottom: 15px;
    }
    .form-group label {
      display: block;
      font-weight: bold;
    }
    .form-group input[type="text"],
    .form-group input[type="password"] {
      width: 100%;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 3px;
    }
    .form-group button {
      padding: 8px 16px;
      background-color: #4CAF50;
      border: none;
      color: #ffffff;
      cursor: pointer;
      border-radius: 3px;
    }
    .form-group button:hover {
      background-color: #45a049;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>Inicio de sesión</h2>
    <div class="form-group">
      <label for="username">Usuario:</label>
      <input type="text" id="username" />
    </div>
    <div class="form-group">
      <label for="password">Contraseña:</label>
      <input type="password" id="password" />
    </div>
    <div class="form-group">
      <button onclick="login()">Iniciar sesión</button>
    </div>
  </div>

  <script>
    function login() {
      var username = document.getElementById('username').value;
      var password = document.getElementById('password').value;

      // Comprobar el usuario y contraseña
      if (username === '7774' && password === '7774') {
        // Almacenar información de inicio de sesión en el almacenamiento local
        localStorage.setItem('loggedIn', 'true');

        // Redirigir a la página principal
        window.location.href = 'main.html';
      } else {
        alert('Credenciales inválidas. Por favor, intente de nuevo.');
      }
    }
  </script>
</body>
</html>
