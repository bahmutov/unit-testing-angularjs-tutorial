// unit test provided value using angular-mocks
describe('add', function () {
  var add;
  beforeEach(function () {
    angular.mock.module('Calc');
    angular.mock.inject(function (_add_) {
      add = _add_;
      expect(typeof add).toEqual('function');
    })
  });
  it('adds numbers', function () {
    expect(add(2, 3)).toEqual(5);
  });
});

// unit test provided value using ng-describe
ngDescribe({
  module: 'Calc',
  inject: 'add',
  tests: function (deps) {
    it('adds numbers', function () {
      expect(deps.add(2, 3)).toEqual(5);
    });
  }
});
