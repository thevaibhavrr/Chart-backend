import {mongoose}from 'mongoose';
mongoose.set("strictQuery", false);

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(" connected to Mongoose database.");
  } catch (error) {
    console.error("Unable to connect to MongoDB Database", error);
  }
};

export {connectDb};
