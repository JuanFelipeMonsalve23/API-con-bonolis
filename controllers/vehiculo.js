const Vehiculo = require('../models/vehiculo')

//VERBOS DE LAS APIS 
// GET=TOMAR(TRAER)
// POST=ENVIAR
// PUT Y PATCH = MODIFICAR
// DELETE = ELIMINAR 

// carro = (color, placa, capacidad)


const getVehiculos = async (req,res)=>{
    const guilombo1 = await Vehiculo.find();
    res.json({
        guilombo1
    })
}
//placa, modelo,color,capacidad
const postVehiculos = async(req,res)=>{
    const {placa, modelo,color,capacidad}=req.body
    const vehiculo1 = new Vehiculo({placa, modelo,color,capacidad})
    await vehiculo1.save()
    res.json({
        msg:"Registro exitoso! :)"
    })
}

const putVehiculos = async (req,res)=>{
    const {placa, modelo,color,capacidad}=req.body
    const vehiculo1 = await Vehiculo.findOneAndUpdate({placa:placa},{modelo:modelo, color:color,capacidad:capacidad})
    res.json({
        msg:'Actualizacion exitosa CON PUT'
    })
}

const patchVehiculos = async (req,res) => {
    const {placa, modelo, color, capacidad} = req.body
    const vehiculo1 = await Vehiculo.findOneAndUpdate({placa:placa},{modelo:modelo})
    res.json({
        msg:'Actualizacion exitosa con path'
    })
}

const deleteVehiculos = async(req,res)=>{
    const{placa}=req.query;
    const vehiculo1 = await Vehiculo.findOneAndDelete({placa:placa})
    res.json({
        msg:'Vehiculo eliminado exitosamente'
    })
}

module.exports={
    getVehiculos,
    postVehiculos,
    putVehiculos,
    patchVehiculos,
    deleteVehiculos
}








































