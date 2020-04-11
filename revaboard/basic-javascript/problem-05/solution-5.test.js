const sut = require('./solution-5.js');

describe('cesar encrypt', () => {
    test('abcABCxyzXYZ shift 1', done => {
        expect(sut('abcABCxyzXYZ', 1)).toBe('bcdBCDyzaYZA');
        done();
    });
    test('arry ["abc", "def"]', done => {
        sut(["abc", "def"], 1, err => {
            expect(err).toBeTruthy();
            expect(err).toEqual('Bad string request');
            done();
        });
        done();
    });
    test("position error", done => {
      sut("abcABCxyzXYZ", 0.5, err => {
          expect(err).toBeTruthy();
          expect(err).toEqual('Bad position request');
          done();
      });
      done();
  });
});