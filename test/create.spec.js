import { Sku } from "../src/sku.model.js";
import { generateRandomSkuJSON } from "./utils/testUtils.js";

import "dotenv/config";
import { StatusCodes } from "http-status-codes";

import { expect } from "chai";
import * as chai from "chai";
import { default as chaiHttp, request } from "chai-http";

chai.use(chaiHttp);

const INVALID_DATA = {};

describe("Create", () => {

    it("should successfully return a CREATED status and the newly created SKU when given all required valid data", async () => {
        let testSKU = generateRandomSkuJSON();
        new Sku({ ...testSKU }).validate();
        let response = await request.execute(process.env.API_URL)
            .post("/api/skus")
            .send(testSKU);
        expect(response).to.have.status((StatusCodes.CREATED));
        expect(response.body).to.be.ok;
    });

    it("should successfully return a CREATED status and a newly created SKU with a unique id when given data using an existing id", async () => {
        let existingSKU = generateRandomSkuJSON();
        let setupResponse = await request.execute(process.env.API_URL)
            .post("/api/skus")
            .send(existingSKU);
        expect(setupResponse).to.have.status((StatusCodes.CREATED));
        expect(setupResponse.body).to.be.ok;

        let testSKURequestBody = generateRandomSkuJSON();
        testSKURequestBody.id = await setupResponse.body.id;

        let response = await request.execute(process.env.API_URL)
            .post("/api/skus")
            .send(testSKURequestBody);
        expect(response).to.have.status((StatusCodes.CREATED));
        expect(response.body).to.be.ok;
        expect(response.body.id).to.not.equal(testSKURequestBody.id);
    });


    it("should return BAD REQUEST given invalid data", async () => {
        let response = await request.execute(process.env.API_URL)
            .post("/api/skus/")
            .send(INVALID_DATA);
        expect(response).to.have.status(StatusCodes.BAD_REQUEST);
    });


});

