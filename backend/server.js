const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

mongoose.connect('mongodb://localhost:27017/leaderboard');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('MongoDB connected'));

app.use(cors());
app.use(express.json());

app.use('/users', require('./routes/userRoutes'));
app.use('/leaderboard', require('./routes/leaderboard'));

app.get('/', (req, res) => res.send('API is running'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
