import { Sku } from "./sku.model.js";
import { generateRandomString } from "../test/utils/testUtils.js";
import express from "express";

import "dotenv/config";


import { StatusCodes } from "http-status-codes";

const app = express();

const mockSkuData = new Map();

app.post('/api/skus', (req, res) => {
    let newSku = new Sku({
        id: generateRandomString(),
        ...req.body
    });

    mockSkuData.set(newSku.id, JSON.stringify(newSku));
    res.status(StatusCodes.CREATED).json(newSku);
});

app.get('/api/skus', (req, res) => {
    res.status(StatusCodes.OK).json(Array.from(mockSkuData));
});

app.get('/api/skus/:id', (req, res) => {
    const sku = mockSkuData.get(req.params.id);
    res.status(sku ? StatusCodes.OK : StatusCodes.NOT_FOUND).json(sku);
});

app.post('/api/skus/:id', (req, res) => {
    const newSku = new Sku({
        id: req.params.id,
        ...req.body
    });

    const sku = mockSkuData.get(req.params.id);
    if (sku) {
        mockSkuData.set(newSku.id, JSON.stringify(newSku));
        res.status(StatusCodes.OK).json(mockSkuData.get(req.params.id));
    } else {
        res.status(StatusCodes.NOT_FOUND).json(newSku);
    }

});

app.delete('/api/skus/:id', (req, res) => {
    const sku = mockSkuData.get(req.params.id);
    res.status(sku ? StatusCodes.OK : StatusCodes.NO_CONTENT).json(mockSkuData.delete(req.params.id));
});

app.listen(process.env.LOCAL_API_PORT, () => {
    console.log('Server is running on ' + process.env.API_URL);
});