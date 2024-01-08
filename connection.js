const mongoose = require('mongoose')

function databaseConnect(){
    mongoose.connect(process.env.MONGODB_URL).then(() => {
        console.log(`Databse connected`);
    }).catch((e) => {
        console.log(`Error: ${e.message}`);
    })
}

module.exports = {
    databaseConnect
}