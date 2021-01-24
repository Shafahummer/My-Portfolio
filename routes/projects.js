
var express = require('express')
var router = express.Router()
const { getProjects, addProjects, upload } = require('../controllers/projects')

router.get('/get-projects', getProjects)

router.post('/add-projects', upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'video', maxCount: 1 }
]), addProjects)

module.exports = router;