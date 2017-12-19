var app = angular.module('registrarApp', []);
app.controller('registrarCtrl', function($scope, $http, $window){
  $scope.respuesta = "";
  $scope.registrarmeClick = function() {
    $http({
      method : 'POST',
      url : 'http://localhost:8080/VuelaLejosWeb/rest/registrar/usuario',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        nombre: $scope.inputNombre,
        apellido: $scope.inputApellido,
        usuario: $scope.inputUsuario,
        contrasena: $scope.inputContrasena,
        fechaDeNacimiento: $scope.inputFechaNacimiento,
        sexo: $scope.inputSexo,
        correo: $scope.inputCorreo,
        direccion: $scope.inputDireccion,
        ciudad: $scope.inputCiudad,
        edad: $scope.inputEdad
      }
    }).then(function mySucces(response) {
      var esRegistroValido = response.data.respuesta;
      if (esRegistroValido && ($scope.inputContrasena === $scope.inputConfirmarContrasena)) {
        alert("El registro ha sido exitoso");
        $window.location.href = "../views/consultas.html"
      } else {
        $scope.respuesta = "Usuario o Contraseña no validos";
      }
    }, function myError(response) {
      $scope.respuestaError = response.statusText;
    });
  }


});
