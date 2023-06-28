class Logo {
    constructor() {
        this.logoText = '';
        this.LogoTextColor = '';
    }

    setLogoText(logoText) {
        this.logoText = logoText;
    }

    setLogoTextColor(logoTextColor) {
        this.LogoTextColor = logoTextColor;
    }

    renderTop() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">` 
    }

    renderBottom() {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.LogoTextColor}">${this.logoText}</text> \n </svg>`
    }


}

module.exports = {Logo};