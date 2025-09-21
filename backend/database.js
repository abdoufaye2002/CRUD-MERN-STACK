const mongoose = require("mongoose")
require("dotenv").config();


const mongoUriAtlas = ``
const mongoUriLocalhost = process.env.MONGO_URI
let mongoUri = ``


const connectToDatabase = async () => {
	if (process.env.NODE_ENV === "production") {
		mongoUri = mongoUriAtlas;
	} else {
		mongoUri = mongoUriLocalhost;
	}

	try {
		await mongoose.connect(mongoUri, {
			dbName: "crud",
			useNewUrlParser: true,
			useUnifiedTopology: true,
			tls: process.env.NODE_ENV === "production",
		});
		console.log("Connexion à la base de données réussie");
	} catch (error) {
		console.log("Erreur lors de la connexion à la base de données", error);
	}
};

module.exports = connectToDatabase;