import handleSubmit from '../formHandler'

describe("Testing the submit functionality", () => {
    test("Testing the handleSubmit() function", (callback) => {
        expect(handleSubmit).toBeDefined();
        callback()
    })
});