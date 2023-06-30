class Shape {
    // Sets the color to an empty string to initialize it.
    constructor() {
        this.color = '';
    }

    // Function to set the color to the shape.
    setColor(color){
        this.color = color;
    }

    // Empty render Abstract(kind of) method to then override it.
    render(){};
}

class Triangle extends Shape {
    // Returns the SVG specifications to create this specific shape.
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    // Returns the SVG specifications to create this specific shape.
    render() {
        return `<rect x="50" height="200" width="200" fill="${this.color}" />`;
    }
}

class Circle extends Shape {
    // Returns the SVG specifications to create this specific shape.
    render() {
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}" />`;
    }
}

module.exports = {Triangle, Square, Circle};