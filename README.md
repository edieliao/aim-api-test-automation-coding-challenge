# aim-api-test-automation-coding-challenge
This exercise is intended to allow you to show your approach and skills in software test planning and
technical execution.
For this exercise, you are being given a description of a theoretical API and a description of its intended
use. It is your task to design an approach to testing this API in anticipation of release to consumers.


Build the tests anticipating that the APIs are not yet deployed and that tests will be deployed prior to the API.

## The API 
The theoretical API under test consists of the following:

The development team for a retail organization plans to build an API intended to be used for the
maintenance of Stock Keeping Unit identifiers (SKUs) which are used to identify and track the
items the company has for sale.

This API will implement the basic CRUD operations:
### POST
Create and Update operations are through HTTP POSTs
POST https://example.com/api/skus

Posts expect a body with SKU, Description and Price
{
"sku":"berliner",
"description": "Jelly donut",
"price":"2.99"
}

### GET
Read operations are through HTTP GETs

GET https://example.com/api/skus

GET https://example.com/api/skus{id}

### DELETE

Delete operations are through HTTP DELETEs

DELETE https://example.com/api/skus{id}


## About
### Tech Stack
#### App
- nodejs
- Express
#### Test
- mocha
- chai
- chai-http

## Getting Started
### Prerequisites
- nvm
- npm
### Install Dependencies
`npm install`
### Run Tests
`npm test`
### Run Locally
`npm start`
