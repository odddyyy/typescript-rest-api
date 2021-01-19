export const today = () => {
  const temp: any = new Date().getTime() / 1000 + (7 * 3600);
  return new Date(temp * 1000);
}