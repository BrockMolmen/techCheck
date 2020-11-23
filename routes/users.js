const { render } = require('ejs')
const express = require('express')
const db = require('../models')
const router = express.Router()


//GET userData 
router.get('/userdata', async (req, res) => {
    const allUsers = await db.users.findAll()
    res.render('userdata', {userData: allUsers});
})
