const { Router }= require('express')
const router = Router()


const {getVehiculos, postVehiculos, putVehiculos, patchVehiculos, deleteVehiculos}=require('../controllers/vehiculo')

router.get('/',getVehiculos)
router.post('/',postVehiculos)
router.put('/',putVehiculos)
router.patch('/',patchVehiculos)
router.delete('/',deleteVehiculos)

module.exports = router