// backend/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth.routes');
const path = require('path');
const dotenv = require('dotenv');

// ENSURE THESE LINES ARE AT THE VERY TOP
require('dotenv').config({ path: path.resolve(__dirname, '.env') });
//const MONGO_URI = process.env.MONGO_URI;
const MONGO_URI = 'mongodb+srv://desigakamaraj:Desiga%4017xyz@cluster0.lzyx6hu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

console.log("MONGO_URI from index.js:", MONGO_URI); // IMPORTANT: Check this output

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));