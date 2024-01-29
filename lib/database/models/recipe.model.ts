import { Schema, model, models } from "mongoose";

export interface IRecipe extends Document {
  _id: string;
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  cuisine: string;
  difficulty: string; // e.g., Easy, Medium, Hard
  prepTime: number; // in minutes
  cookTime: number; // in minutes
  servings: number;
  author: string; // username or user ID
  createdAt: Date;
  updatedAt: Date;
  imageUrl?: string; // optional, URL to an image
  tags?: string[]; // optional, e.g., ["Vegetarian", "Dessert"]
}

const RecipeSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  ingredients: { type: String, required: true },
  instructions: { type: String, required: true },
  cuisine: { type: String, required: true },
  difficulty: { type: String, required: true },
  prepTime: { type: Number, required: true },
  cookingTime: { type: Number, required: false },
  servings: { type: Number },
  author: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  imageUrl: { type: String, required: true },
  tags: { type: String, required: false },
});

const Recipe = models.Recipe || model("Recipe", RecipeSchema);

export default Recipe;
