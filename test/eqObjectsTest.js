const eqObjects = require("../eqObjects");
const assert = require("chai").assert;

describe("#eqObjects", () => {
  it("returns true for eqObjects({ a: { z: 1 }, b: 2 },{ a: { z: 1 }, b: 2 })", () =>
    assert.strictEqual(
      eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),
      true
    ));
  it("returns true for eqObjects({ a: { z: [1, 2, 3] }, b: 2 }, { a: { z: [1, 2, 3] }, b: 2 })", () =>
    assert.strictEqual(
      eqObjects({ a: { z: [1, 2, 3] }, b: 2 }, { a: { z: [1, 2, 3] }, b: 2 }),
      true
    ));
  it('returns true for eqObjects({ a: "1", b: "2" }, { b: "2", a: "1" }', () =>
    assert.strictEqual(
      eqObjects({ a: "1", b: "2" }, { b: "2", a: "1" }),
      true
    ));
  it('returns false for eqObjects({ a: "1", b: "2" }, { a: "1", b: "2", c: "3" })', () =>
    assert.strictEqual(
      eqObjects({ a: "1", b: "2" }, { a: "1", b: "2", c: "3" }),
      false
    ));
  it('returns false for eqObjects({ c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3, 4] })', () =>
    assert.strictEqual(
      eqObjects({ c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3, 4] }),
      false
    ));
});
