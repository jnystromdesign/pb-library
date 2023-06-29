import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send({
    version: "1.0.0",
    description: "API description",
    paths: {
      "/": {
        href: "/",
        GET: {
          description: "Documentation",
        },
      },
      "/users": {
        href: "/users",
        GET: {
          description: "List of users",
        },
        POST: {
          description: "Create user",
          payload: {
            name: "string",
            email: "string",
            password: "string",
          },
        },
      },
      "/users/{id}": {
        href: "/users/{id}",
        GET: {
          description: "Get user with specific id",
        },
        PUT: {
          description: "Update user with specific id",
          payload: {
            "name?": "string",
            "email?": "string",
            "password?": "string",
          },
        },
        DELETE: {
          description: "Delete user with specific id",
        },
      },
    },
  });
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
