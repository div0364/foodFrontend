const mongoose = require('mongoose');
const mongoURI = 'mongodb://goFood:divyam123@ac-goysybp-shard-00-00.jplklky.mongodb.net:27017,ac-goysybp-shard-00-01.jplklky.mongodb.net:27017,ac-goysybp-shard-00-02.jplklky.mongodb.net:27017/goFood?replicaSet=atlas-c66l3y-shard-0&ssl=true&authSource=admin';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("DB connected successfully");

        const fetchedData = await mongoose.connection.db.collection("food_items").find({}).toArray();
        const foodCategoryData = await mongoose.connection.db.collection('food_category').find({}).toArray();

        global.food_items = fetchedData;
        global.foodCategory = foodCategoryData;

       // console.log("Fetched food items:", global.food_items);
        //console.log("Fetched food categories:", global.foodCategory);

    } catch (err) {
        console.error("DB CONNECTION ISSUES", err);
        process.exit(1);
    }
};

module.exports = mongoDB;