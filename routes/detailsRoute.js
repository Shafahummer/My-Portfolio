
var express = require('express')
var router = express.Router()
const { getAbout, addAbout } = require('../controllers/detailsController')

router.get('/get-about', getAbout)
router.post('/add-about', addAbout)

module.exports = router;