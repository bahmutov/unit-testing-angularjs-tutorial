ngDescribe({
  module: 'Calc',
  inject: 'add',
  tests: function (deps) {
    it('adds numbers', function () {
      expect(deps.add(2, 3)).toEqual(5);
    });
  }
});
