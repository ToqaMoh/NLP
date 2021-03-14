import formValidation from '../src/client/js/formValidation'

describe("Testing validation functionality", () => {
    test("Testing the formValidation() function", (callback) => {
        
        expect(formValidation).toBeDefined();
        callback()
    })
});