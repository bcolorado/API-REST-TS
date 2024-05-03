import { connect } from 'mongoose';

//Connect to MongoDB using ODM Mongoose
const dbConnect = async (): Promise<void> => {
  try {
    const DB_URI = <string>process.env.DB_URI;
    await connect(DB_URI);
  } catch (error) {
    console.error('Error connecting to the database', error);
  }
};

export default dbConnect;
