const mongoose = require("mongoose");
const URL = "mongodb://0.0.0.0.27017/eCommerce";

const connectDatabase = () => {
  mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
};

module.exports = connectDatabase;
