import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  port: process.env.PORT,
  database_Url: process.env.DATABASE_URL,
  bcrypt_salt_round:process.env.BCRYPT_SALT_ROUND,
  defalut_password:process.env.DEFALUT_PASS
};
