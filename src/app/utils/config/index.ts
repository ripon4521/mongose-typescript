import dotend from 'dotenv';
import path from 'path';

dotend.config({ path: path.join(process.cwd(), '.env') });

export default {
  NODE_ENV:process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.MONGODB_URI,
  default_pass: process.env.DEFAULT_PAS,
  bcrypt_salt_round: process.env.BCRYPT_SALT_ROUNDS
};
