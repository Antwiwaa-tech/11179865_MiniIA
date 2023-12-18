const express = require('express')
const router = express.Router()

//get
router.get('/',(req ,res) =>{
    res.send('Your name')
})
router.post('/id',(req ,res) =>{
    res.send('patient ID')

})
router.patch('/id',(req ,res) =>{

})
router.delete('/id',(req ,res) =>{

})


module.exports = router