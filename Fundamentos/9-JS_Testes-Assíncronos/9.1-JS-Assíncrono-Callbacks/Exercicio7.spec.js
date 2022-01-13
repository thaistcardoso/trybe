const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};


it('uppercae "test" to equal "TEST"', (done) => {
    uppercase('test', (str) => {
      try {
        expect(str).toBe('TEST');
        done();
      } catch (error) {
        done(error);
      }
    });
  });
