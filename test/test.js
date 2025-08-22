import { describe, it } from 'node:test'
import assert from "node:assert/strict";

describe("Test", () => {
    it("should succeed", () => {
        assert(true, "Pass");
    });

    it("should fail", () => {
        assert.fail("Fail");
    });
});

