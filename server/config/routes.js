const authors = require("../controllers/authors");
module.exports = function(app) {
    app.get("/authors", authors.index);
    app.get("/authors/:id", authors.retrieve);
    app.post("/authors", authors.create);
    app.patch("/authors/:id", authors.update);
    app.delete("/authors/:id", authors.destroy);
}