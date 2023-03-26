const express = require('express')
const cors = require('cors')

const { DbConection } = require('../database/config')

class Server{
    constructor(){
        this.app = express();
        this.port= process.env.PORT;

        this.vehiculosPath='/api/vehiculos';
        this.ventasPath = '/api/ventas';

        this.conectarDb();
        this.middlewares();
        this.routes()
    }

    async conectarDb(){
        await DbConection();
    }

    middlewares(){
        this.app.use(cors());// seguridad
        this.app.use(express.static('public'))
        this.app.use(express.json())
    }

    routes(){
        this.app.use(this.vehiculosPath, require('../routes/vehiculos'));
        this.app.use(this.ventasPath, require('../routes/Ventas'));
    }

    listen(){
       this.app.listen(this.port, (req,res)=>{
            console.log(`Escuchando por el puerto ${this.port}`)
       }) 
    }
}

module.exports=Server