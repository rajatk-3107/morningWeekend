const randomWords = require('random-words')

var words = '';
for (i = 0; i < 1000000; i++) {
    words += ' ' + Math.random()
}

// console.log(randomWords(5))
// console.log(randomWords(6))
// const xyz = require('./abc')
// console.log(xyz)
var fs = require('fs')
fs.writeFile('words.txt', words, (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log("File saved")
    }
})
console.log("Hello")
    // fs.appendFile('abc.txt', 'appended text', (err, data) => {
    //     if (err) {
    //         console.log(err)
    //     } else {
    //         console.log('File appended')
    //     }
    // })
    // fs.open('xyz.txt', 'yyy', (err, data) => {
    //     if (err) {
    //         console.log(err)
    //     } else {
    //         console.log("File savef")
    //     }
    // })

// var a = () => {
//     console.log("Call Back function")
// }

// var b = (x, y) => {
//     if (x > 5) {
//         y()
//     } else {
//         console.log("Main function")
//     }
// }

// b(6, a)