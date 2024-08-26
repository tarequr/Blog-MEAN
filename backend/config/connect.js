const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config({ path: "./.env" });

// Define the database name
const databaseName = process.env.DB_NAME || 'blogData';

const client = new MongoClient(process.env.MONGO_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

let database;

module.exports = {
    connectToServer: async () => {
        try {
            await client.connect();  // Ensure the client is connected
            database = client.db(databaseName);
            console.log(`Successfully connected to database: ${databaseName}`);
        } catch (error) {
            console.error("Failed to connect to the database:", error);
            process.exit(1);  // Exit the process with failure
        }
    },
    getDb: () => {
        return database;
    }
};

console.log("Connecting to");



// const { MongoClient, ServerApiVersion } = require('mongodb');

// require('dotenv').config({path: "./config.env"});


// const client = new MongoClient(process.env.MONGO_URI, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });

// let database
// module.exports = {
//     connectToServer: () => {
//         database =  client.db(blogData);
//     },
//     getDb: () => {
//         return database
//     }
// }

// // console.log(client);
// // console.log(client.s.options.dbName);

// console.log("Connecting to");

// // async function run() {
// //     try {
// //         await client.connect();
// //         await client.db("admin").command({ ping: 1 });

// //         console.log("Pinged your deployment. You successfully connected to MongoDB!.");
// //     } finally {
// //         await client.close();
// //     }
// // }

// // run().catch(console.dir);