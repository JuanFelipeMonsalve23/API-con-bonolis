const mongoose = require('mongoose')

 const DbConection = async()=>{
    try {
        mongoose.connect(process.env.MONGODB_CNN, {})
        console.log('Connected succesfully')
    } catch (error) {
        console.log('No se pudo conectar') 
    }
}

module.exports={
    DbConection
}