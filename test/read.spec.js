import { generateRandomSkuJSON } from "./utils/testUtils.js";

import "dotenv/config";
import { StatusCodes } from "http-status-codes";

import { expect } from "chai";
import * as chai from "chai";
import { default as chaiHttp, request } from "chai-http";

chai.use(chaiHttp);

const NON_EXISTENT_SKU_ID = "doesNotExist";

describe("Read", () => {
    let testSkuId;
    let testSKU;

    beforeEach(async () => {
        testSKU = generateRandomSkuJSON();
        let setupResponse = await request.execute(process.env.API_URL)
            .post("/api/skus")
            .send(testSKU);
        testSkuId = await setupResponse.body.id;
    });

    it("should successfully return list of all SKUs when given no input params", async () => {
        let response = await request.execute(process.env.API_URL)
            .get("/api/skus");
        expect(response).to.have.status((StatusCodes.OK));
    });

    it("should successfully return specific SKU when given an id of an existing SKU", async () => {
        let response = await request.execute(process.env.API_URL)
            .get("/api/skus/" + testSkuId);
        expect(response).to.have.status((StatusCodes.OK));
        expect(response.body.id).to.equal(testSkuId);
        expect(response.body.sku).to.equal(testSKU.sku);
        expect(response.body.description).to.equal(testSKU.description);
        expect(response.body.price).to.equal(testSKU.price);
    });

    it("should return NOT FOUND SKUs when given an id of an NON existing SKU", async () => {
        let response = await request.execute(process.env.API_URL)
            .get("/api/skus/" + NON_EXISTENT_SKU_ID);
        expect(response).to.have.status((StatusCodes.NOT_FOUND));
    });
});


