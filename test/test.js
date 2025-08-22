import test from "node:test";
import assert from "node:assert/strict";

test("Success", () => {
  assert(true, "Pass");
});

test("Fail", () => {
  assert.fail("Fail");
});