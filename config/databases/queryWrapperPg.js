const { execute } = require("../config/databases/queryWrapperPg");

class TestService {
    async test() {
        const query = 'SELECT * FROM api_game';
        try {
            const result = await execute(query, []);
            if (result.length === 0) {
                return { "status": 400, "success": false, message: "No game data found" };
            } else {
                return { "status": 200, "success": true, message: "Game data fetched successfully", data: result };
            }
        } catch (error) {
            console.error("Error in TestService:", error);
            throw error;
        }
    }
}

module.exports = new TestService();
