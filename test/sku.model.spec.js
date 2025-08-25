import { Sku } from "../src/sku.model.js";

import { expect } from "chai";

describe('Test SKU Model', () => {
    const testSkuData = {
        sku: "berliner",
        description: "Jelly donut",
        price: "2.99"
    };

    describe('When creating a model with missing required fields', () => {
        it('it should throw an error indicating each missing field', async () => {
            let sku = new Sku();

            try {
                let result = await sku.validate();
            } catch (err) {
                expect(err.errors.sku).to.exist;
                expect(err.errors.description).to.exist;
                expect(err.errors.price).to.exist;
            }

        });
    });

    describe('when creating a model with all requried fields', () => {
        it('it should create successfully', async () => {
            let testSku = new Sku({
                ...testSkuData
            });

            let result = await testSku.validate();
            expect(testSku.sku).to.equal(testSkuData.sku);
            expect(testSku.description).to.equal(testSkuData.description);
            expect(testSku.price).to.equal(testSkuData.price);

        });
    });
});