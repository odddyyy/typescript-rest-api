import { createConnections } from 'typeorm';

export default async () => {
  try {
    await createConnections();
  } catch (error) {
    console.error(`couldn't connect to database`);
  }
  console.log(`database connected`);
}