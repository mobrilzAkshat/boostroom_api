const { client } = require('./databasePg');

exports.execute = async function (query, bindValuesArray) {
    try {
        const result = await client.query(query, bindValuesArray);
        return result.rows;
    } catch (error) {
        console.error("Error executing query:", error);
        throw error;
    }
}
