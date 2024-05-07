const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// JWT 비밀키
const JWT_SECRET = 'your_secret_key_here';

exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({ username, email, password });
    await user.save();
    res.status(201).send('User registered successfully');
  } catch (error) {
    res.status(500).send('Error registering new user');
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user || !await bcrypt.compare(password, user.password)) {
      return res.status(401).send('Invalid credentials');
    }
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ message: 'Logged in successfully', token });
  } catch (error) {
    res.status(500).send('Login error');
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { username } = req.body;
    await User.findOneAndDelete({ username });
    res.send('User deleted successfully');
  } catch (error) {
    res.status(500).send('Error deleting user');
  }
};
