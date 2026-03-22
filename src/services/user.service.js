const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// REGISTER
const registerUser = async (name, email, password, role, profileImage) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) throw new Error("User already exists");

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ name, email, password: hashedPassword, role, profileImage });
  await user.save();
  return user;
};

// LOGIN
const loginUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("User not found");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid password");

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );
  return { user, token };
};

// GET ALL USERS
const getAllUsers = async () => {
  return await User.find().select("-password");
};

// GET USER BY ID
const getUserById = async (id) => {
  return await User.findById(id).select("-password");
};

// UPDATE USER
const updateUser = async (id, data) => {
  return await User.findByIdAndUpdate(id, data, { new: true }).select("-password");
};

// DELETE USER
const deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};

module.exports = { registerUser, loginUser, getAllUsers, getUserById, updateUser, deleteUser };