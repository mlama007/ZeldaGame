app.controller('backController', ['$scope', '$routeParams', 'background', function($scope, $routeParams, background) {
     $scope.images = background.images.filter(function(a) {
      return (a.id == $routeParams.id);
     })[0];;

}]);
