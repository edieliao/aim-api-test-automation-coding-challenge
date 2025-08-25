import "dotenv/config";
import { StatusCodes } from "http-status-codes";

import {expect} from "chai";
import * as chai from "chai";
import {default as chaiHttp, request} from "chai-http";

chai.use(chaiHttp);

describe("SKU API Acceptance Tests", () => {
    describe("Create", () => {
        it("should work", () => {
            expect.fail("TODO: Test WIP");
        });
    });

    describe("Read", () => {
        it("should work", async () => {
            const response = await request.execute(process.env.API_URL)
                .get("/api/skus");
            expect(response).to.have.status((StatusCodes.OK));
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

