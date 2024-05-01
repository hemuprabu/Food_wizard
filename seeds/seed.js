const sequelize = require('../config/connection');
const { User, Recipes } = require('../models');

const userData = require('./userData.json');
const recipeData = require('./recipeData.json')
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Recipes.bulkCreate(recipeData, {
    individualHooks: true,
    returning: true,
  });


  process.exit(0);
};

seedDatabase();
