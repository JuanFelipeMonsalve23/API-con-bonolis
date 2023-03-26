const { Router } = require('express')
const router = Router()

const { getVentas, postVentas, putVentas, patchVentas, deleteVentas }=require('../controllers/venta')

router.get('/',getVentas)
router.post('/',postVentas)
router.put('/',putVentas)
router.patch('/',patchVentas)
router.delete('/',deleteVentas)

module.exports = router


