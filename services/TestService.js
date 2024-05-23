const { execute } = require("../config/databases/queryWrapperPg");


class TestService{
    async test() {
        const query = 'select * from api_game';
        const result = await execute(query, [])
        console.log(result, "result form service file")
        if (result.length === 0){
            return {"status": 400, "success": false, message:"something went wrong"}
        }else{
            return {"status": 200, "success": true, message:"game data fetched successfully"}
        }
    }
}

module.exports = new TestService()