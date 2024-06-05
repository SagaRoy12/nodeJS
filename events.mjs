import {EventEmitter} from 'node:events';
class MyEmitter extends EventEmitter{}
const myemiter = new MyEmitter()
myemiter.on('waterfull' , ()=>{
    console.log("turn the tap off")
    setTimeout(()=>{
    console.log("have you turned the tap off")} , 5000) 
})

console.log("random text")
myemiter.emit('waterfull')
console.log("random text")