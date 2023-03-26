const {Schema, model} = require ('mongoose')

const VentaSchema = Schema({
    IdVenta:{
        type:Number
    },
    precioVenta:{
        type:Number
    },
    fechaVenta:{
        type:String
    },
    placa:{
        type:String
    }
})

module.exports = model('Venta',VentaSchema);