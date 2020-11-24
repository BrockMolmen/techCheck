const { render } = require('ejs')
const express = require('express')
const db = require('../models')
const router = express.Router()



// load allUser data
router.get('/users', (req, res) => {
  res.render('users/users')
});


// / GET profile (COMPLETE)
// router.get('/profile/:username', async (req, res) => {
//     const foundUser = req.user
//     const allPosts = await db.post.findAll({
//         where: {
//             userId: foundUser.dataValues.id
//         }
//     })
//     res.render('profile', {posts: allPosts});
// })

module.exports = router