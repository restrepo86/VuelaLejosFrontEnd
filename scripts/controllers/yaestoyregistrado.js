var app = angular.module('loginApp', []);
app.controller('loginCtrl', function($scope, $http, $window){
  $scope.respuestaError="";
  $scope.entrarClick = function() {
    $http({
      method : 'POST',
      url : 'http://localhost:8080/VuelaLejosWeb/rest/ingreso/ingresar',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        usuario: $scope.usuarioInput,
        contrasena: $scope.contrasenaInput
      }
    }).then(function mySucces(response) {
      var esUsuarioValido = response.data.respuesta;
      if (esUsuarioValido) {
        $window.location.href = "../views/consultas.html"
      } else {
        $scope.respuestaError = "Usuario o Contraseña no validos";
      }
    }, function myError(response) {
      $scope.respuestaError = response.statusText;
    });
  }


});
