import { generateRandomString, generateRandomSkuJSON } from "./utils/testUtils.js";

import "dotenv/config";
import { StatusCodes } from "http-status-codes";

import { expect } from "chai";
import * as chai from "chai";
import { default as chaiHttp, request } from "chai-http";

chai.use(chaiHttp);

const NON_EXISTENT_SKU_ID = "doesNotExist";

describe("Delete", () => {
    let testSKU;
    let testSkuId;

    beforeEach(async () => {
        testSKU = generateRandomSkuJSON();
        let setupResponse = await request.execute(process.env.API_URL)
            .post("/api/skus")
            .send(testSKU);
        testSkuId = await setupResponse.body.id;
    });

    it("should delete successfully given the id of an existing sku", async () => {
        let response = await request.execute(process.env.API_URL)
            .delete("/api/skus/" + testSkuId)
            .send(testSKU);
        expect(response).to.have.status((StatusCodes.OK));
    });

    it("should return NO CONTENT given the id of a NON existing sku", async () => {
        let response = await request.execute(process.env.API_URL)
            .delete("/api/skus/" + NON_EXISTENT_SKU_ID)
            .send(testSKU);
        expect(response).to.have.status((StatusCodes.NO_CONTENT));
    });
});

