const request = require('supertest')
const {app} = require('../index')

describe("Testing the Server localhost:8081 functionality", () => {

    test("Testing the response in root route", async (callback) => {
        await request(app).get("/").then(response => {
            expect(response.statusCode).toBe(200)
        }).catch(error => {
            return error;
        })
        callback()
     })
});