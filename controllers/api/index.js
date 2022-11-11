const router = require('express').Router();
const loginRoutes = require('./userRoutes');

router.use('/users', loginRoutes);
<<<<<<< HEAD
//router.use('/convo', convoRoutes);//
=======

//router.use('/convo', convoRoutes);

>>>>>>> 8860292b242535e30c64541b9015172db0c7e82b

module.exports = router;