const {Schema, model} = require('mongoose')

const VehiculoSchema = Schema({

    placa:{
        type:String
    },
    modelo:{
        type:String
    },
    color:{
        type:String
    },
    capacidad:{
        type:Number
    }

})

module.exports = model('Vehiculo',VehiculoSchema);