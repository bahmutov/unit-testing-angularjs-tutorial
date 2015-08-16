// unit test provided value using ng-describe
ngDescribe({
  module: 'AddApp',
  controller: 'AddController',
  mock: {
    AddApp: {
      add: function ($q, a, b) {
        return $q.when(a + b);
      }
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
