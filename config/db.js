const mongoose = require('mongoose');

// MongoDB URI
const uri = "mongodb+srv://wkdvnddl050701:Chan0518*@cluster0.wfs9xv3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// MongoDB 연결 함수
const connectDB = async () => {
  try {
    // MongoDB 연결
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB Connected');
    
    // Mongoose 쿼리 디버그 모드 설정
    mongoose.set('debug', true);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
