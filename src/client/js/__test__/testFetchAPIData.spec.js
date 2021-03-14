import apiData from '../fetchAPIdata'
const request = require('supertest')
const {app} = require('../../../server/index')

describe("Testing the fetching data from localhost:8081 functionality", () => {
    test("Testing if the apiData() function is defined", (callback) => {
        expect(apiData).toBeDefined();
        callback()
    })

    test("Testing the fetch in apiData() function", async (callback) => {
        await request(app).get("/submit").then(response => {
            expect(response.statusCode).toBe(200)
        }).catch(error => {
            return error;
        })
        callback()
     })
});