const map = require("../map");
const assert = require("chai").assert;

describe("#map", () => {
  it("returns [ 'g', 'c', 't', 'm', 't' ] for map(['ground','control', 'to', 'major', 'tom'], word => word[0]),  ['g', 'c', 't', 'm', 't']", () =>
    assert.deepEqual(
      map(["ground", "control", "to", "major", "tom"], word => word[0]),
      ["g", "c", "t", "m", "t"]
    ));
  it("returns [529, 324, 9801, 729, 1024] for map([23, 18, 99, 27, 32], n => n * n), [529, 324, 9801, 729, 1024]", () =>
    assert.deepEqual(
      map([23, 18, 99, 27, 32], n => n * n),
      [529, 324, 9801, 729, 1024]
    ));
  it("returns ", () =>
    assert.deepEqual(
      map(["avocado", "guava"], f => `I love to eat ${f}s.`),
      ["I love to eat avocados.", "I love to eat guavas."]
    ));
});
