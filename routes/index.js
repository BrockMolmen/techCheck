const { render } = require('ejs')
const express = require('express')
const db = require('../models')
const router = express.Router()

router.get('/allusers', (req, res) => {
  db.users.findAll().then(foundUsers = () => {
    res.render('users', { users: foundUsers })
  })
})




module.exports = router;