angular.module('consultasApp',[])

.controller('consultasCtrl',function($scope,$window){

    $scope.functionConsultasVuelosRedireccionar = function(){
      $window.location.href = "../views/menuconsultas.html"
    }
  });
