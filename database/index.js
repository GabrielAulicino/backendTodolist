
const mongoose = require("mongoose");

module.exports = () => {
    mongoose.connect('mongodb://localhost/node-api', { useNewUrlParser: true },
    (error)=>{
        if(error){
            console.log(`error to conect data base`)
        }else{
            console.log(`data base conect`)
        }

    });
};