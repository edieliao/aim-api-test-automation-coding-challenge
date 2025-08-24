import {assert} from "chai";
import * as chai from "chai";
import {default as chaiHttp, request} from "chai-http";
chai.use(chaiHttp);

import app from "../src/app.js";

describe("Test Stub", () => {
    it("should succeed", () => {
        assert(true, "Pass");
    });

    it("should fail", () => {
        assert.fail("Fail");
    });
});

describe("API", () => {
    describe("GET", () => {
        it("should work", () => {
            //TODO connect to API
            request.execute("http://localhost:3000").get("/")
            .end((err, response) => {
                expect(response).to.have.status(200);
            });
        });
    });
});

