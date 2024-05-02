const router = require("express").Router();
const { User, Recipes } = require("../models");
const withAuth = require("../utils/auth");

// Prevent non logged in users from viewing the homepage
router.get("/", withAuth, async (req, res) => {
  try {
    const recipeData = await Recipes.findAll();

    console.log(recipeData);

    const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));

    console.log(recipes);
    // const response = await fetch(
    //   "https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=8",
    //   {
    //     headers: {
    //       "X-API-Key":
    //         "0cf6a822c1d2495fbe02acd91f694968"
          
    //     },
    //   }
    // );
    // if (!response.ok) {
    //   console.log(response);
    //   throw new Error("Failed to fetch data");
    // }
    // const data = await response.json();
    // console.log(data);
    // console.log("Recipe:", data.results[0].title);
    //const users = userData.map((project) => project.get({ plain: true }));

    res.render("homepage", {
      recipes,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching data.");
  }
});

router.get("/login", (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

module.exports = router;
