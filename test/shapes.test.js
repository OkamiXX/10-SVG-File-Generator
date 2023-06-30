const {Triangle, Square, Circle} = require('../lib/shapes');

//Triangle
describe('Triangle', () => {
    it('should take a new Triangle object and use setColor function', () => {
        // Creates new Triangle Object.
        const shape = new Triangle();
        // Sets the color for the new object.
        shape.setColor('blue');
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
});

//Square
describe('Square', () => {
    it('should take a new Square object and use setColor function', () => {
        // Creates new Square Object.
        const shape = new Square();
        // Sets the color for the new object.
        shape.setColor('blue');
        expect(shape.render()).toEqual('<rect x="50" height="200" width="200" fill="blue" />');
    });
});

//Circle
describe('Circle', () => {
    it('should take a new Circle object and use setColor function', () => {
        // Creates new Circle Object.
        const shape = new Circle();
        // Sets the color for the new object.
        shape.setColor('blue');
        expect(shape.render()).toEqual('<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="blue" />');
    });
});