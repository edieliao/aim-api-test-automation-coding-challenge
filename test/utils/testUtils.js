import { randomBytes } from "node:crypto";

const DEFAULT_GENERATED_STRING_LENGTH = 20;

export function generateRandomString() {
    return randomBytes(DEFAULT_GENERATED_STRING_LENGTH).toString('hex');
};

export function generateRandomSkuJSON() {
    const mockSkuJSON = {
        id: generateRandomString(),
        sku: generateRandomString(),
        description: generateRandomString(),
        price: generateRandomString()
    };

    return mockSkuJSON;
};