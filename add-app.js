angular.module('AddApp', ['RemoteCalc'])
  .controller('AddController', function ($scope, add) {
    $scope.a = $scope.b = $scope.sum = 0;

    function computeSum() {
      add($scope.a, $scope.b)
        .then(function (response) {
          $scope.sum = response;
        });
    }

    $scope.$watch('a', computeSum);
    $scope.$watch('b', computeSum);
  });
