const fs = require('fs')

// jsut a file runner example
/*fs.readFile('text.txt' , 'utf8' , (err , data)=>{
    console.log(err , data)
})
console.log("hello")*/

// read file async to showcase the intentionally blocking

const a = fs.readFileSync('text.txt')
console.log(a.toString())