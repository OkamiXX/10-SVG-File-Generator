const inquirer = require('inquirer');
const fs = require('fs');
const {Triangle, Square, Circle} = require('./lib/shapes');
const {Logo} = require('./lib/text');


inquirer
    .prompt ([

        {
            type: 'input',
            message: 'Please provide your logo/project initials (*UP to 3 CHAR*) ',
            name: 'logoText',

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
        console.log(answers);

        const logo = new Logo();
        logo.setLogoText(answers.logoText);
        logo.setLogoTextColor(answers.logoTextColor);

        switch(answers.logoShape) {
            case 'Circle ◯':
                const circle = new Circle();
                circle.setColor(answers.logoShapeColor);
                
                const finalCircleSvg = `${logo.renderTop()} \n ${circle.render()} \n ${logo.renderBottom()}`;
                
                fs.writeFile('testSVG.svg', finalCircleSvg, (err) => {  
                    // throws an error, you could also catch it here
                    if (err) throw err;
                
                    // success case, the file was saved
                    console.log('SVG written!');
                });
                break;
            case 'Triangle △':
                const triangle = new Triangle();
                triangle.setColor(answers.logoShapeColor);
                
                const finalTriangleSvg = `${(logo.renderTop)} ${triangle.render()} ${logo.renderBottom()}`;
                break;
            case 'Square ▢':
                const square = new Square();
                square.setColor(answers.logoShapeColor);
                
                const finalSquareSvg = `${(logo.renderTop)} ${square.render()} ${logo.renderBottom()}`;
                break;
        }


    })




    