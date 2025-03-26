import app from './app';
import config from './app/config';
import mongoose from 'mongoose';

async function main() {
  try {
    await mongoose.connect(config.database_Url as string);
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
    app.listen(config.port, () => {
      console.log(`Programming Hero University is running on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
