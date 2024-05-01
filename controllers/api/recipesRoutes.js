// const router = require('express').Router();
// const { Recipes } = require('../../models');

// router.get('/', async (req, res)=> {
//     console.log(req.body);
  
//   const url = 'https://food-recipes-with-images.p.rapidapi.com/?q=chicken%20soup';
//   const options = {
//       method: 'GET',
//       headers: {
//           'X-RapidAPI-Key': '0dded9a2d9msh17f6e8b3b72b296p19de1fjsnf34dbdc867b7',
//           'X-RapidAPI-Host': 'food-recipes-with-images.p.rapidapi.com'
//       }
//   };
  
//   try {
//       const response = await fetch(url, options);
//       const result = await response.text();
//       console.log(result);
//   } catch (error) {
//       console.error(error);
//   }
    
// });



// module.exports = router;