const Venta = require('../models/venta')

const getVentas = async (req,res) => {
    const VenticaXD = await Venta.find();
    res.json({
        VenticaXD
    })
}

const postVentas = async (req,res) => {
    const {IdVenta,precioVenta,fechaVenta,placa} = req.body;
    const Venta1 = new Venta({IdVenta,precioVenta,fechaVenta,placa})
    await Venta1.save()
    res.json({
        msg:'Ventica registrada uwu'
    })
}

const putVentas = async (req,res) => {
    const {IdVenta,precioVenta,fechaVenta,placa} = req.body;
    const Venta1 = await Venta.findOneAndUpdate({IdVenta:IdVenta},{precioVenta:precioVenta, fechaVenta:fechaVenta, placa:placa})
    res.json({
        msg: 'Ventica actualizada con exito'
    })    
}

const patchVentas = async (req,res) => {
    const {IdVenta,precioVenta,fechaVenta,placa} = req.body;
    const Venta1 = await Venta.findOneAndUpdate({IdVenta:IdVenta},{precioVenta:precioVenta})
    res.json({
        msg:'Ventica actualizada exitosamente con patch'
    })
}

const deleteVentas = async(req,res) => {
    const{IdVenta} = req.query;
    const Venta1 = await Venta.findOneAndDelete({IdVenta:IdVenta})
    res.json({
        msg:'Ventica eliminada :C'
    })
}

module.exports = {
    getVentas,
    postVentas,
    putVentas,
    patchVentas,
    deleteVentas
}
