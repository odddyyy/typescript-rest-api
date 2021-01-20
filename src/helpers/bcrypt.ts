import * as bcrypt from 'bcrypt';

const SALT = 10;

export const hashPassword = (password: string) => {
  return bcrypt.hash(password, SALT);
}

export const verifyPassword = async (password: string, hashedPassword: string) => {
  return bcrypt.compare(password, hashedPassword);
}