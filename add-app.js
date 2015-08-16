angular.module('AddApp', ['Calc'])
  .controller('AddController', function ($scope, add) {
    $scope.a = $scope.b = $scope.sum = 0;

    $scope.$watch('a', function () {
      $scope.sum = add($scope.a, $scope.b);
    });

    $scope.$watch('b', function () {
      $scope.sum = add($scope.a, $scope.b);
    });
  });
