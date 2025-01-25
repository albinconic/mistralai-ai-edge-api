import { Hono } from "hono";

const app = new Hono();

// Routes
import recipeRoutes from "./api/routes/recipeRoute";

// Public
/*app.get('/public/*', async (ctx) => {
	return await ctx.env.ASSETS.fetch(ctx.req.raw);
});*/

// Home
app.get('/', (ctx) => {
    console.log('Home route accessed');
    return ctx.text('Hello World!');
});

// Routes
app.route('/api/v1/recipe', recipeRoutes);


export default app;
