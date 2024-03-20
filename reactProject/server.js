const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(cors()); 

// Connection to MongoDB
mongoose.connect('mongodb://localhost:27017/use_info');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));


const registrationSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
});
const Registered = mongoose.model('Registered', registrationSchema);

// Define API endpoint for user registration
app.post('/register', async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;
    console.log('Received registration request:', req.body);
    const newUser = new Registered({ firstname, lastname, email, password });
    await newUser.save();
    console.log('User registered successfully:', newUser);
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// login
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log('Received login request:', req.body);
    const user = await Registered.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    if (user.password !== password) {
      return res.status(401).json({ message: 'Incorrect password' });
    }
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
