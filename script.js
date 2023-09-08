db.recipes.insertMany([
  {
    _id: 1,
    Name: "Tofu Stir-Fry",
    CategoryID: 3,
    Ingredients: [
      {
        IngredientID: 6,
        Quantity: "200g",
      },
      {
        IngredientID: 7,
        Quantity: "50g",
      },
      {
        IngredientID: 5,
        Quantity: "2 tbsp",
      },
    ],
    Steps: [6, 7, 8],
  },
  {
    _id: 2,
    Name: "Chocolate Cake",
    CategoryID: 2,
    Ingredients: [
      {
        IngredientID: 1,
        Quantity: "2 cups",
      },
      {
        IngredientID: 2,
        Quantity: "1.5 cups",
      },
      {
        IngredientID: 3,
        Quantity: "3",
      },
      {
        IngredientID: 4,
        Quantity: "1 cup",
      },
      {
        IngredientID: 7,
        Quantity: "100g",
      },
    ],
    Steps: [1, 2, 3, 4, 5, 9],
  },
  {
    _id: 3,
    Name: "Teriyaki Chicken",
    CategoryID: 1,
    Ingredients: [
      {
        IngredientID: 5,
        Quantity: "4 tbsp",
      },
      {
        IngredientID: 3,
        Quantity: "4",
      },
      {
        IngredientID: 1,
        Quantity: "2 cups",
      },
    ],
    Steps: [7, 5, 6, 10],
  },
]);



db.categories.insertMany([
  {
    _id: 1,
    Name: "Japanese",
  },
  {
    _id: 2,
    Name: "Cake",
  },
  {
    _id: 3,
    Name: "Vegetarian",
  },
]);


db.ingredients.insertMany([
  {
    _id: 1,
    Name: "Flour",
  },
  {
    _id: 2,
    Name: "Sugar",
  },
  {
    _id: 3,
    Name: "Eggs",
  },
  {
    _id: 4,
    Name: "Milk",
  },
  {
    _id: 5,
    Name: "Soy Sauce",
  },
  {
    _id: 6,
    Name: "Tofu",
  },
  {
    _id: 7,
    Name: "Chocolate",
  },
]);




db.steps.insertMany([
  {
    _id: 1,
    Description: "Preheat the oven to 350°F.",
  },
  {
    _id: 2,
    Description: "Mix the flour and sugar together.",
  },
  {
    _id: 3,
    Description: "Add the eggs and milk to the mixture and stir well.",
  },
  {
    _id: 4,
    Description: "Pour the batter into a greased baking pan.",
  },
  {
    _id: 5,
    Description: "Bake in the preheated oven for 25-30 minutes.",
  },
  {
    _id: 6,
    Description: "Cut the tofu into small cubes.",
  },
  {
    _id: 7,
    Description: "Heat a pan and add soy sauce.",
  },
  {
    _id: 8,
    Description: "Add the tofu cubes and cook until they are browned.",
  },
  {
    _id: 9,
    Description: "Melt the chocolate in a double boiler.",
  },
  {
    _id: 10,
    Description: "Another step description.",
  },
]);

