import mongoose from 'mongoose';
import app from './app';
import config from './app/utils/config/index';

async function main(): Promise<void> {
  try {
    await mongoose.connect(config.database_url as string);
    console.log('Database connected');

    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
