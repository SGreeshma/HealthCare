const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(bodyParser.json());

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(async (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  const db = client.db();
  const collection = db.collection('appointments');

  app.post('/api/book-appointment', async (req, res) => {
    try {
      const appointment = req.body;
      const result = await collection.insertOne(appointment);
      res.status(201).json({ message: 'Appointment booked successfully!', result });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error booking appointment.' });
    }
  });

  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
});