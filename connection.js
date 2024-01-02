const mongoose = require('mongoose')

function databaseConnect(){
    mongoose.connect("mongodb://127.0.0.1:27017/urlshortner").then(() => {
        console.log(`Databse connected`);
    }).catch((e) => {
        console.log(`Error: ${e.message}`);
    })
}

module.exports = {
    databaseConnect
}