const router = require("express").Router();
const { User, Recipes } = require("../models");
const withAuth = require("../utils/auth");

// Prevent non logged in users from viewing the homepage
router.get("/", withAuth, async (req, res) => {
  try {
    const response = await fetch(
      "https://food-recipes-with-images.p.rapidapi.com/?q=chicken%20soup",
      {
        headers: {
          "X-RapidAPI-Key":
            "f0d85bf896msh212d57dec87319cp1a2f4ajsn9e52e939e8ca",
          "X-RapidAPI-Host": "food-recipes-with-images.p.rapidapi.com",
        },
      }
    );
    if (!response.ok) {
      console.log(response);
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    console.log(data);
    console.log("Recipe:", data.d[0].Title);
    //const users = userData.map((project) => project.get({ plain: true }));

    res.render("homepage", {
      data,
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
