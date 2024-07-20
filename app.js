const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const swaggerSetup = require('./swagger'); // Import Swagger setup

dotenv.config({ path: './.env' });

const app = express();

app.use(express.json());

const db = require('./config/db');
db();

// Use Swagger UI
app.use('/api-docs', swaggerSetup);

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/books', require('./routes/bookRoutes'));
app.use('/api/cart', require('./routes/cartRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
