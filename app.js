const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./api/routes/userRoutes');

const app = express();

app.use(express.json());

app.use('/api', userRoutes);

connectDB().then(() => {
    app.use('/api', userRoutes);
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
}).catch((err) => {
    console.error("Database connection failed", err);
    process.exit(1);
});