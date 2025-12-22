import bcrypt from "bcryptjs";
import User from "../models/User.js";

export const register = async (req, res) => {
  const { username, password } = req.body;

  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await User.create({
    username,
    password: hashedPassword, 
  });

  res.status(201).json({ message: "User created successfully" });
};

export default register;