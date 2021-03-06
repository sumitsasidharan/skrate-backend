const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const userRouter = require('./routes/userRoutes');
const meetingRouter = require('./routes/meetingRoutes');

const app = express();

// Middlewares
dotenv.config();
app.use(express.json());

// Routes
app.use('/users', userRouter);
app.use('/meetings', meetingRouter);

app.use('/', (req, res) => {
   res.send(
      "Visit <a href='https://github.com/sumitsasidharan/skrate-backend'>Github Link</a> for API endpoints & other details "
   );
});

// Database & Server
const DB_URL = process.env.MONGO_URI;
const port = process.env.PORT || 5000;

mongoose
   .connect(DB_URL)
   .then(() => {
      console.log('Database connected successfully!');

      // Listening to incoming requests
      app.listen(port, () => console.log(`Server listening to port: ${port}`));
   })
   .catch((err) => console.log('*** Something Went Wrong! ***\n', err.message));
