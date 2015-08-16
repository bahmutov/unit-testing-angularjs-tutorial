// unit test provided value using angular-mocks
/*
describe('add controller', function () {
  var $controller, $rootScope, $scope;
  beforeEach(function () {
    angular.mock.module('AddApp');
  });
  beforeEach(angular.mock.inject(function (_$controller_, _$rootScope_) {
    $controller = _$controller_;
    $rootScope = _$rootScope_;
  }));
  beforeEach(function () {
    $scope = $rootScope.$new();
    $controller('AddController', { $scope: $scope });
  });
  it('sets a, b and sum to zero', function () {
    expect($scope.a).toEqual(0);
    expect($scope.b).toEqual(0);
    expect($scope.sum).toEqual(0);
  });
});
*/

// unit test provided value using ng-describe
ngDescribe({
  module: 'AddApp',
  controller: 'AddController',
  http: {
    get: {
      '/add/?a=10&b=20': 30
    }
  },
  tests: function (deps) {
    it('sets a, b and sum to zero', function () {
      expect(deps.AddController.a).toEqual(0);
      expect(deps.AddController.b).toEqual(0);
      expect(deps.AddController.sum).toEqual(0);
    });

    it('computes the sum', function () {
      deps.AddController.a = 10;
      deps.AddController.b = 20;
      deps.step();
      expect(deps.AddController.sum).toEqual(30);
    });
  }
});
