const Express = require("express");
const privateRoute = Express.Router()
const TestController = require("../controllers/TestController");

privateRoute.get("/api/games", TestController.getAllGames);

module.exports = privateRoute;