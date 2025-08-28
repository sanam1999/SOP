const express = require('express');
const router = express.Router({ mergeParams: true });
const warpAsync = require('../utils/warpAsync');
const passport = require('passport');
const { signup,login,logout} = require('../Controller/usre');
const upload = require("../utils/multer"); // Import multer middleware

router.route('/signup')
    .post(warpAsync(signup));
    
router.post(
      '/login',
       passport.authenticate('local', { failureMessage: true }),
        warpAsync(login)
);

router.get('/logout', warpAsync(logout));

module.exports = router;
