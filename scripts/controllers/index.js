
angular.module('VuelaLejosApp', [])

.controller('Controller', function($scope, $window){

  $scope.registrateahoraredirect = function(){
    $window.location.href = "./views/registrateahora.html"
  }

  $scope.yaestoyregistradoredirect = function(){
    $window.location.href = "./views/yaestoyregistrado.html"
  }

});
