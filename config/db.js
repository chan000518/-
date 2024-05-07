const mongoose = require('mongoose');
const uri = "mongodb+srv://wkdvnddl050701:Chan0518*@cluster0.wfs9xv3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log('MongoDB Connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
