import "dotenv/config";
import { StatusCodes } from "http-status-codes";

import {expect} from "chai";
import * as chai from "chai";
import {default as chaiHttp, request} from "chai-http";

chai.use(chaiHttp);

describe("SKU API Acceptance Tests", () => {
    const testSKU = {
        sku: "berliner",
        description: "Jelly donut",
        price: "2.99"
    };

    describe("Create", () => {
        it("should work", async () => {
            const response = await request.execute(process.env.API_URL)
                .post("/api/skus")
                .send(testSKU);
            expect(response).to.have.status((StatusCodes.CREATED));
        });
    });

    describe("Read", () => {
        it("should work", async () => {
            const response = await request.execute(process.env.API_URL)
                .get("/api/skus");
            expect(response).to.have.status((StatusCodes.OK));
        });

        it("should work", async () => {
            const response = await request.execute(process.env.API_URL)
                .get("/api/skus/" + testSKU.sku);
            expect(response).to.have.status((StatusCodes.OK));
        });
    });

    describe("Update", () => {
        it("should work", async () => {
            const response = await request.execute(process.env.API_URL)
                .put("/api/skus/" + testSKU.sku)
                .send(testSKU);
            expect(response).to.have.status((StatusCodes.NO_CONTENT));
        });
    });

    describe("Delete", () => {
        it("should work", async () => {
            const response = await request.execute(process.env.API_URL)
                .put("/api/skus/" + testSKU.sku)
                .send(testSKU);
            expect(response).to.have.status((StatusCodes.NO_CONTENT));
        });
    });
});

