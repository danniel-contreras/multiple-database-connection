import bcrypt from "bcrypt"
import Cryptr from "cryptr";

const cryptr = new Cryptr(process.env.DB_CRYPT_KEY || "7717897177");

/**
 * It takes a password, generates a salt, and then hashes the password with the salt
 * @param {string} password - The password to hash.
 * @returns The hash of the password.
 */
export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

/**
 * It takes a password and a userPassword, and returns a boolean value.
 * @param {string} password - string - the password that the user entered
 * @param {string} userPassword - string - the password that is stored in the database
 * @returns A promise that resolves to a boolean.
 */
export const checkPassword = async (
  password: string,
  userPassword: string,
): Promise<boolean> => {
  const isEqueal = await bcrypt.compare(password, userPassword);
  return isEqueal;
};

/**
 * It takes a string as an argument and returns an encrypted string.
 * @param {string} data - The data to be encrypted.
 * @returns The encrypted data
 */
export const encrypt = (data:string)=>{
  return cryptr.encrypt(data)
}

/**
 * It takes a string, encrypts it, and returns the encrypted string
 * @param {string} data - The data to be encrypted.
 * @returns The decrypted data.
 */
export const decrypt = (data:string)=>{
  return cryptr.decrypt(data)
}