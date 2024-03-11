import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const port = 5000;
console.log(port)

const app = express();
app.get('/', (req,res) => {
  res.send('API running ...');
});

// start the server
app.listen(port, () => console.log(`Server running on port ${port}`));