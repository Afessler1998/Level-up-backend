const mongoose = require("mongoose");

async function connectDb() {
  const connection = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  });
  return connection;
}

module.exports = connectDb;
