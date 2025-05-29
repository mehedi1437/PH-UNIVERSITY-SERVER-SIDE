import { model, Schema } from 'mongoose';
import { TUser } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../config';

const userSchema = new Schema<TUser>(
  {
    id: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    needPasswordChange: { type: Boolean, default: true },
    role: {
      type: String,
      enum: ['admin', 'student', 'faculty'],
      required: true,
    },
    status: {
      type: String,
      enum: ['in-progress', 'blocked'],
      default: 'in-progress',
      required: true,
    },
    isDeleted: { type: Boolean, required: true, default: false },
  },
  { timestamps: true },
);

// ! Pre save middleware hook : will work on create() save()
userSchema.pre('save', async function (next) {
  // console.log(this, 'Pre Hook : We Will save the data');
  // ? hasing password and save into DB
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_round),
  );
  next();
});
// ! Post save middleware/hook
userSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});
export const User = model<TUser>('User', userSchema);
