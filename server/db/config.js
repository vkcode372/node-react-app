const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://vkcodeblock:N4mYHSZWdNlTIATj@cluster0.o4jjc11.mongodb.net/nodecurd');
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://vkcodeblock:N4mYHSZWdNlTIATj@cluster0.o4jjc11.mongodb.net/nodecurd');
  } catch (error) {
    // return error;
    console.error('Error connecting to MongoDB:', error);
  }
}

module.exports=connectDB();