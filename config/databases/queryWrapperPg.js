// const { pool } = require('./databasePg');

// const getConnection = async () => {
//     return new Promise((resolve, reject) => {
//         pool.connect((err, client, release) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 console.log("Connection established successfully");
//                 resolve({ client, release });
//             }
//         });
//     });
// }

// exports.execute = async function(query, bindValuesArray) {
//     return new Promise(async (resolve, reject) => {
//         try {
//             const { client, release } = await getConnection();
//             client.query(query, bindValuesArray, (err, result) => {
//                 release(); // release the connection back to the pool
//                 if (err) {
//                     reject(err);
//                 } else {
//                     resolve(result);
//                 }
//             });
//         } catch (e) {
//             reject(e);
//         }
//     });
// }
