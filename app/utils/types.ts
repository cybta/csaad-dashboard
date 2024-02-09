export type IngredientType = {
  id: string;
  name: string;
  measurement: string[];
  icon: string;
};

export type MeasurmentType = {
  id: string;
  name: string;
  display: string;
};

export type Ingredient = {
  ingredient_id: string;
  measurement_id: string;
  qty: number;
};

export type Recipe = {
  id: string;
  name: string;
  main_image: string;
  ingredients: Ingredient[];
};
