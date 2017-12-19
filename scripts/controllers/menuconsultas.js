
var app = angular.module('menuConsultasApp', []);
app.controller('menuConsultasCtrl', function($scope, $http, $window){
  $scope.respuestaError="";
  $scope.consultarVuelosPorEstadoClick = function() {
    $http({
      method : 'POST',
      url : 'http://localhost:8080/VuelaLejosWeb/rest/consultas/vuelos/por/estado',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        estado: $scope.inputEstado
      }
    }).then(function mySucces(response) {
      var vuelos =  response.data.salidaList;
      $scope.vuelos = vuelos;
      console.log(vuelos);


    }, function myError(response) {
      $scope.respuestaError = response.statusText;
    });
  }


});
