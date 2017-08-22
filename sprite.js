const sprity = require('sprity');

sprity.create({
    src: './images/**/*.{png,jpg}',
    out: './dist',
    cssPath: '../img',
    dimension: [{
        ratio: 1, dpi: 72
    }],
    engine: 'jimp',
    processor: 'less',
    template: './less.hbs',
    style: './sprite.less',
    margin: 0
}, (err, result) => {
    if(err) {
        throw err;
    }
    else {
        console.log('Successfully generated sprite image and less file');   
    }
});