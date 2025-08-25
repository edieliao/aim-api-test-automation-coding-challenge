import { generateRandomString, generateRandomSkuJSON } from "./utils/testUtils.js";

import "dotenv/config";
import { StatusCodes } from "http-status-codes";

import { expect } from "chai";
import * as chai from "chai";
import { default as chaiHttp, request } from "chai-http";

chai.use(chaiHttp);

const NON_EXISTENT_SKU_ID = "doesNotExist";
const INVALID_UPDATE_DATA = {};

describe("Update", () => {
    let existingSkuId;
    let updatedSKU = generateRandomSkuJSON();

    beforeEach(async () => {
        let testSKU = generateRandomSkuJSON();
        let setupResponse = await request.execute(process.env.API_URL)
            .post("/api/skus")
            .send(testSKU)
        existingSkuId = await setupResponse.body.id;
    });

    it("should successfully return updated SKU given the id of an existing SKU and valid update data", async () => {
        let response = await request.execute(process.env.API_URL)
            .put("/api/skus/" + existingSkuId)
            .send(updatedSKU);
        expect(response).to.have.status(StatusCodes.OK);
        expect(response.body.sku).to.equal(existingSkuId);
    });

    it("should return NOT FOUND given the id of an nonexisting SKU", async () => {
        let response = await request.execute(process.env.API_URL)
            .put("/api/skus/" + NON_EXISTENT_SKU_ID)
            .send(updatedSKU);
        expect(response).to.have.status(StatusCodes.NOT_FOUND);
    });

    it.skip("should return BAD REQUEST given invalid data", async () => {
        let response = await request.execute(process.env.API_URL)
            .put("/api/skus/" + existingSkuId)
            .send(INVALID_UPDATE_DATA);
        expect(response).to.have.status(StatusCodes.BAD_REQUEST);
    });
});

