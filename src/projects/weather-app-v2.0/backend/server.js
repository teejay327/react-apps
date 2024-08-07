import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import weatherRoutes from './routes/weather-routes.js';

dotenv.config();

connectDB();

import DATA from './data.js';
console.log(DATA);
//import router from './routes/users-routes.js';
import usersRoutes from './routes/users-routes.js';


const port = 5000;
console.log(port)

const app = express();

/*
// app.get('/') and app.get('/api/DATA') were commented out 

app.get('/', (req,res) => {
  res.send('API running ...');
});

app.get('/api/DATA', (req,res) => {
  res.json(DATA);
});
*/
app.use(express.json());

app.use('/api/users/', usersRoutes); // perhaps not final slash!!!!!!!!!!!!!!!
// new code underneath
app.use('/api/weather', weatherRoutes);

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500)
  res.json({ message: error.message || 'Unknown error occurred' });
});


// start the server
app.listen(port, () => console.log(`Server running on port ${port}`));