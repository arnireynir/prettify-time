var expect = require('chai').expect;
var PrettifyTime = require('../src/PrettifyTime.js');

describe("Convert duration to seconds", function() {

  it("Take in 1h and return 3600s", function() {
    expect(PrettifyTime.durationToSeconds("1h")).to.equal(3600);
  });

  it("Take in 1h 30m and return 5400", function() {
    expect(PrettifyTime.durationToSeconds("1h 30m")).to.equal(5400);
  });

  // it("Take in -1h 30m and return -5400s", function() {
    // expect(PrettifyTime.durationToSeconds("-1h 30m")).to.equal(-5400);
  // });

  it("Take in 1h 0m and return 3600s", function() {
    expect(PrettifyTime.durationToSeconds("1h 0m")).to.equal(3600);
  });

});
