import * as bcrypt from 'bcrypt';

const SALT = 10;

export const hashPassword = (password: string) => {
  return bcrypt.hash(password, SALT);
}