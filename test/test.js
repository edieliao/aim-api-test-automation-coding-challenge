import "dotenv/config";
import { StatusCodes } from "http-status-codes";

import {expect} from "chai";
import * as chai from "chai";
import {default as chaiHttp, request} from "chai-http";
chai.use(chaiHttp);

const api = request.execute(process.env.API_URL);

describe("SKU API Acceptance Tests", () => {
    describe("Create", () => {
        it("should work", () => {
            expect.fail("TODO: Test WIP");
        });
    });

    describe("Read", () => {
        it("should work", () => {
            api.get("/")
            .end((err, response) => {
                console.log(StatusCodes.OK);
                expect(response).to.have.status(StatusCodes.OK);
            });
        });
    });

    describe("Update", () => {
        it("should work", () => {
            expect.fail("TODO: Test WIP");
        });
    });

    describe("Delete", () => {
        it("should work", () => {
            expect.fail("TODO: Test WIP");
        });
    });
});

