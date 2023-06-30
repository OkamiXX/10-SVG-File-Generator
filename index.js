
//importing all the required libraries or classes.
const inquirer = require('inquirer');
const {Triangle, Square, Circle} = require('./lib/shapes');
const fs = require('fs');
const {Logo} = require('./lib/text');

//initializing inquirer
inquirer
    .prompt ([
        //questions that the user need to respond to.
        {
            type: 'input',
            message: 'Please provide your logo/project initials (*UP to 3 CHAR*) ',
            name: 'logoText',

            //method to wait until the user meet all the criteria required.
            validate: (answer) => {
                if(answer === '') {
                    return '';
                }
                else if (answer.length > 3) {
                    return 'PLEASE, YOU HAVE TO PROVIDE NO MORE THAN 3 char';
                }
                return true;

            }
        },
        {
            type: 'input',
            message: 'Which color would you like the characters to be? ',
            name: 'logoTextColor',
            default: 'Color|or|Hex-Num',

        },
        {
            type: 'list',
            message: 'Which shape would you like the logo to have? ',
            name: 'logoShape',
            choices: ['Circle ◯', 'Triangle △', 'Square ▢'],
        },
        {
            type: 'input',
            message: 'Which color would you like the shape have in the background? ',
            name: 'logoShapeColor',
            default: 'Color|or|Hex-Num',
        },

    ])
    .then(answers => {
        console.log('Answers Retrieved!!!');

        // Create a new Logo object to assign the LOGO initials and its color.
        const logo = new Logo();
        // Retrieve the characters.
        logo.setLogoText(answers.logoText);
        // Set color to the characters.
        logo.setLogoTextColor(answers.logoTextColor);

        // Switch statements for when the user make a choice on the shape.
        // After the user's response then the code will execute based on that.
        // Example: If Circle is chose then it will assigns the colors and then render the text-colors
        // and at the end the svg file is generated.
        switch(answers.logoShape) {
            case 'Circle ◯':
                // Creates a new Circle object.
                const circle = new Circle();

                // Sets the color for the new Circle.
                circle.setColor(answers.logoShapeColor);
        
                // Variable in which all the information is retrieved and then stored to render it and generate the file later.
                const finalCircleSvg = `${logo.renderTop()} \n ${circle.render()} \n ${logo.renderBottom()}`;
                
                // Writes/Generates the SVG file to the File System.
                fs.writeFile('logo.svg', finalCircleSvg, (err) => {  
                    // Throws an error, you could also catch it here
                    if (err) throw err;
                
                    // Success case, the file was saved
                    console.log('SVG generated!');
                });
                break;
            case 'Triangle △':
                // Creates a new Tirangle object.
                const triangle = new Triangle();
                
                // Sets the color for the new Triangle.
                triangle.setColor(answers.logoShapeColor);
                
                // Variable in which all the information is retrieved and then stored to render it and generate the file later.
                const finalTriangleSvg = `${logo.renderTop()} \n ${triangle.render()} \n ${logo.renderBottom()}`;
                
                // Writes/Generates the SVG file to the File System.
                fs.writeFile('logo.svg', finalTriangleSvg, (err) => {  
                    // throws an error, you could also catch it here
                    if (err) throw err;
                
                    // success case, the file was saved
                    console.log('SVG generated!');
                });
                break;
            case 'Square ▢':
                // Creates a new Square object.
                const square = new Square();
                
                // Sets the color for the new Square.
                square.setColor(answers.logoShapeColor);
                
                // Variable in which all the information is retrieved and then stored to render it and generate the file later.
                const finalSquareSvg = `${logo.renderTop()} \n ${square.render()} \n ${logo.renderBottom()}`;
                
                // Writes/Generates the SVG file to the File System.
                fs.writeFile('logo.svg', finalSquareSvg, (err) => {  
                    // throws an error, you could also catch it here
                    if (err) throw err;
                
                    // success case, the file was saved
                    console.log('SVG generated!');
                });

                break;
        }
    })





    