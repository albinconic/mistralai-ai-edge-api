import { Hono } from "hono";
import { getRecipe } from "../controllers/recipeController";

const recipeRoutes = new Hono();

recipeRoutes.post('/get-recipe', getRecipe);

export default recipeRoutes;