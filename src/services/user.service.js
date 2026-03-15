const User = require("./models/user.models");

const createUser = async (req, res) => {
  const { name, email, password, role } = req.body
  const user = new User({ name, email, password, role })
  await user.save()
  res.status(201).json({ message: "User created successfully", user })
}

const getAllUsers = async (req, res) => {
  const users = await User.find()
  res.status(200).json(users)
}

const getUserById = async (req, res) => {
  const { id } = req.params
  const user = await User.findById(id)
  res.status(200).json(user)
}

const updateUser = async (req, res) => {
  const { id } = req.params
  const { name, email, password, role } = req.body
  const user = await User.findByIdAndUpdate(
    id,
    { name, email, password, role },
    { new: true }
  )
  res.status(200).json({ message: "User updated successfully", user })
}

module.exports = { createUser, getAllUsers, getUserById, updateUser }