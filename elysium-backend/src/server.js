import { Hono } from 'hono';

// Create a new Hono application instance
const app = new Hono();

// Define the port for the server to listen on
const port = 3000;

// --- Basic Route Definition ---

// Define a simple root route (GET /)
app.get('/', (c) => {
  // c is the context object, used for responding and accessing request data
  return c.text('Elysium Backend is running! (Hono Nya)');
});

// --- Server Startup Logic ---

console.log(`Elysium Hono Server is starting on port ${port}...`);

// Use the app.listen method to start the server
// The first argument is the port, the second is the callback function
app.listen(port, () => {
  console.log(`🚀 Server ready! Access it at http://localhost:${port}`);
});

// Basic error handling for the root route (optional but good practice)
app.notFound((c) => {
  return c.text('404 Not Found (This route does not exist)', 404);
});

app.onError((err, c) => {
  console.error(`${err}`);
  return c.text('500 Internal Server Error', 500);
});
