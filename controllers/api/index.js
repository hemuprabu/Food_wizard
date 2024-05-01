const router = require('express').Router();
const userRoutes = require('./userRoutes');
const recipesRoutes= require('./recipesRoutes');

router.use('/users', userRoutes);
router.use('/recipes', recipesRoutes );
module.exports = router;
