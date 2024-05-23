const TestService = require("../services/TestService")

class TestController{
    async getAllGames(request,response, next ){
        try{
            const result = await TestService.test()
            console.log('result from controller file, result')
            return result.success ? response.status(200).json(result):response.status(203).json(result) 
        }catch (e){
            throw e
        }finally{
            next()
        }
    }
}

module.exports = new TestController()