const fs = require('fs')

const txtInput  = fs.readFileSync('./txt/input.txt', 'utf-8')
console.log(txtInput)


const txtOut = `Bu sahypa doly yagdayda amama asyrylan node moduli gorkeryar ${txtInput}.\nCreated on ${Date.now()}`;

fs.writeFileSync('./txt/Out.txt', txtOut);
console.log('File yazyldy')


const newOut = `Bu bolsa ikinji isler ${txtInput}.\n Created on ${Date.now()}`

fs.writeFileSync('./txt/cykys.txt', newOut);
console.log("file doredildi!")