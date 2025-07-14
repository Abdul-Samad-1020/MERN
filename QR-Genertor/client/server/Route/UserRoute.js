const express = require('express')

const router = express.Router()



router.get('/testuser', async(req,res)=>{
    res.json({
        "msg":"this is test"
    })
})

module.exports = router