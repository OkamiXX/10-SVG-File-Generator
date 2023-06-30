class Logo {
    // Initialize the variables to then store it.
    constructor() {
        this.logoText = '';
        this.LogoTextColor = '';
    }

    // Function to take the user input and then set the logoText to use it later and populate the SVG.
    setLogoText(logoText) {
        this.logoText = logoText;
    }

    // Function to set the color of the logo text based on the user input.
    setLogoTextColor(logoTextColor) {
        this.LogoTextColor = logoTextColor;
    }

    // Renders/Returns the first line required to display a SVG file with its source, width and height.
    renderTop() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">` 
    }

    // Renders/Returns the bottom side of the SVG file to then set the logoText and its color already set by user.
    renderBottom() {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.LogoTextColor}">${this.logoText}</text> \n </svg>`
    }


}

module.exports = {Logo};