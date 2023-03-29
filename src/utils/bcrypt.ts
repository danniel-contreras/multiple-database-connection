import * as bcrypt from 'bcrypt';

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

export const checkPassword = async (
  password: string,
  userPassword: string,
): Promise<boolean> => {
  const isEqueal = await bcrypt.compare(password, userPassword);
  return isEqueal;
};
