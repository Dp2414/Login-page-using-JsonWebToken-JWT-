const User = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "your-secret-key";

exports.getUsers = async (req, res) => {
  const user = await User.find({}, { __v: 0 });
  res.json(user);
};

exports.getUsersById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id, { password: 0, __v: 0 });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
exports.Signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "7d" });
    res.cookie("token", token, { httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000 });
    res.status(201).json({ message: "User created successfully", user: { name: user.name, email: user.email } });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "7d" });
    res.cookie("token", token, { httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000 });
    res.json({ message: "Login successful", user: { id: user._id, name: user.name, email: user.email } });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


exports.Logout = (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out successfully" });
};

exports.verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Access denied" });
  }
  
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

exports.Dashboard = async (req, res) => {
  try {
    const user = await User.findById(req.userId, { password: 0, __v: 0 });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "Welcome to Dashboard", user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};




exports.Edit = async (req, res) => {
  const { name, email } = req.body;
  const { id } = req.params;
  const updatedUser = { name, email };
  const user = await User.findByIdAndUpdate(id, updatedUser);
  res.json({ message: "User updated successfully", updatedUser });
};
    

