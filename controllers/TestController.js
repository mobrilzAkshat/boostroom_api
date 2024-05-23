const TestService = require("../services/TestService");

class TestController {
    async getAllGames(request, response, next) {
        try {
            const result = await TestService.test();
            return result.success ? response.status(200).json(result) : response.status(400).json(result);
        } catch (error) {
            console.error("Error in TestController:", error);
            return response.status(500).json({ success: false, message: `Internal Server Error`, err:error });
        } finally {
            next();
        }
    }
}

module.exports = new TestController();
