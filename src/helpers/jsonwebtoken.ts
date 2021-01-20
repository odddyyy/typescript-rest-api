import * as jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET

export const createToken = async (payload: object) => {
  return jwt.sign(payload, SECRET);
}

export const verifyToken = async (token: string) => {
  return jwt.verify(token, SECRET);
};