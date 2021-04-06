import { isValidColumnForm } from '../../lib/ValidateFunction';

describe('Product Name is Valid', () => {
    //einzelne Tests
    it('should invalidate the product name when less than 2 characters', () => {
        const result = isValidColumnForm('a');
        expect(result).toBeFalsy()
    })

})