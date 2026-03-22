const userService = require("../services/user.service");

// REGISTER
const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const profileImage = req.file ? req.file.filename : null;  // get uploaded file
    const user = await userService.registerUser(name, email, password, role, profileImage);
    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// LOGIN
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { user, token } = await userService.loginUser(email, password);
    res.status(200).json({ message: "Login successful", token, user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// GET ALL USERS
const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET USER BY ID
const getUserById = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// UPDATE USER
const updateUser = async (req, res) => {
  try {
    const data = { ...req.body };
    if (req.file) data.profileImage = req.file.filename;  // update image if uploaded
    const user = await userService.updateUser(req.params.id, data);
    res.status(200).json({ message: "User updated successfully", user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE USER
const deleteUser = async (req, res) => {
  try {
    await userService.deleteUser(req.params.id);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { register, login, getAllUsers, getUserById, updateUser, deleteUser };