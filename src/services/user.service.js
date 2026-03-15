const User = require("./models/user.models");

const createUser = async (req, res) => {
  const { name, email, password, role } = req.body

  const user = new User({
    name,
    email,
    password,
    role
  })

  await user.save()
  res.status(201).json({ message: "User created successfully", user })
}

module.exports = { createUser }