describe('add', function () {
  beforeEach(function () {
    expect(typeof add).toEqual('function');
  });

  it('adds numbers', function () {
    expect(add(2, 3)).toEqual(5);
  });
});
