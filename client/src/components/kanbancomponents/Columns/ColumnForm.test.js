import { isValidColumnForm } from '../../../lib/ValidateFunction';

describe('Product Name is Valid', () => {
    //einzelne Tests
    it('should invalidate the product name when less than 1 character', () => {
        const result = isValidColumnForm('a');
        expect(result).toBeTruthy()
    })

})