const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080;

// Optional: Add a health check route
server.get("/health", (req, res) => {
  res.send("Server is healthy!");
});

server.use(middlewares);
server.use(router);

// ✅ Add a log to confirm the server is running
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
