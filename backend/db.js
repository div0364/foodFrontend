const mongoose = require('mongoose');
const mongoURI = 'mongodb://goFood:divyam123@ac-goysybp-shard-00-00.jplklky.mongodb.net:27017,ac-goysybp-shard-00-01.jplklky.mongodb.net:27017,ac-goysybp-shard-00-02.jplklky.mongodb.net:27017/goFood?replicaSet=atlas-c66l3y-shard-0&ssl=true&authSource=admin';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("DB connected successfully");

        // Ensure connection is open
        const db = mongoose.connection.db;

        // Fetch collection and find documents
        const collection = db.collection('food_items');
        const data = await collection.find({}).toArray();

       // console.log(data);
    } catch (err) {
        console.log("DB CONNECTION ISSUES");
        console.error(`Error: ${err.message}`);
        process.exit(1);
    }
};

module.exports = mongoDB;
