var Tesseract = require('tesseract.js');
var myImage = '../images/testImage.jpg';

Tesseract.recognize(myImage)
.then(function(result){
    console.log(result)
})
