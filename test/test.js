import "dotenv/config";

import {expect} from "chai";
import * as chai from "chai";
import {default as chaiHttp, request} from "chai-http";
chai.use(chaiHttp);

const api = request.execute(process.env.API_URL);

describe("API", () => {
    describe("GET", () => {
        it("should work", () => {
            api.get("/")
            .end((err, response) => {
                expect(response).to.have.status(200);
            });
        });
    });
});

