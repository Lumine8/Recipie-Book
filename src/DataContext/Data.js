import { v4 as uuidv4 } from "uuid";

export const recipies = [
  {
    id: uuidv4(),
    name: " Chocolate Chip Cookies",
    Cuisine: "American",
    img:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80",
    ingredients:
      "all-purpose flour, baking soda, salt, unsalted butter, granulated sugar, brown sugar, vanilla extract, eggs, chocolate chips",
    instructions: [
      "Preheat oven to 375°F (190°C)",
      "In a small bowl, whisk together flour, baking soda, and salt",
      "In a large bowl, cream together butter, granulated sugar, brown sugar, and vanilla extract until light and fluffy",
      "Beat in eggs, one at a time, until well combined.",
      "Gradually add the flour mixture to the butter mixture, stirring until just combined",
      "Stir in chocolate chips",
      "Drop rounded tablespoons of dough onto ungreased baking sheets.",
      "Bake for 9 to 11 minutes or until golden brown.",
      "Let the cookies cool on the baking sheets for a few minutes, then transfer to wire racks to cool completely."
    ]
  },
  {
    id: uuidv4(),
    name: "Garlic Spaghetti",
    Cuisine: "Italian",
    img:
      "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
    ingredients:
      "spaghetti(225 g), 3 tablespoons extra virgin olive oil, 4 cloves garlic, sliced, 1 teaspoon red chili flakes, 2 tablespoons fresh parsley, finely chopped, optional",
    instructions: [
      "Bring a large pot of salted water to a boil. Cook the pasta according to package instructions. Save ¼ cup (60 ml) of pasta water, then drain.",
      "Add the olive oil and garlic to a large cold sauté pan. Turn the heat to medium-low and slowly heat up until the garlic is fragrant and lightly colored, about 3 minutes.",
      "Add the chile flakes and cook for another minute.",
      "Add the reserved pasta water and bring to a simmer. Add the cooked spaghetti and parsley, if using. Stir until the pasta is well-coated. Season with salt to taste."
    ]
  },
  {
    id: uuidv4(),
    name: "Best Ever Muffins",
    Cuisine: "American ",
    img:
      "https://images.unsplash.com/photo-1558303420-f814d8a590f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80",
    ingredients: "Flour, Eggs, Baking powder, Salt, Sugar, Milk, Oil",
    instructions: [
      "Stir the dry ingredients together and make a well in the center.",
      "Beat the egg, then whisk in the milk and oil.",
      "Pour the egg mixture into the flour mixture and stir.",
      "Spoon the batter into prepared muffin cups.",
      "Bake until the tops spring back when lightly pressed."
    ]
  }
];
