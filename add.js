angular.module('Calc', [])
  .value('add', function add(a, b) {
    return a + b;
  });

angular.module('RemoteCalc', [])
  .service('add', function ($http) {
    return function add(a, b) {
      return $http.get('/add/', {
        params: {
          a: a,
          b: b
        }
      });
    };
  });
