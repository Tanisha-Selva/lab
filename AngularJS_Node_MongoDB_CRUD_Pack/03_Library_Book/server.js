const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/library_db';

app.use(express.json());
app.use(express.static(path.join(__dirname, 'frontend')));


const schema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  author: { type: String, required: true, trim: true },
  isbn: { type: String, required: true, trim: true },
  quantity: { type: Number, required: true, min: 0 }
}, { timestamps: true });

const Record = mongoose.model('book', schema);

function validId(req, res, next) {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ error: 'Invalid record ID.' });
  }
  next();
}

app.get('/api/book', async (req, res) => {
  try {
    const records = await Record.find().sort({ createdAt: -1 });
    res.json(records);
  } catch (err) {
    res.status(500).json({ error: 'Could not read records.' });
  }
});

app.post('/api/book', async (req, res) => {
  try {
    const record = await Record.create(req.body);
    res.status(201).json(record);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.put('/api/book/:id', validId, async (req, res) => {
  try {
    const record = await Record.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!record) return res.status(404).json({ error: 'Record not found.' });
    res.json(record);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.delete('/api/book/:id', validId, async (req, res) => {
  try {
    const record = await Record.findByIdAndDelete(req.params.id);
    if (!record) return res.status(404).json({ error: 'Record not found.' });
    res.json({ message: 'Deleted successfully.' });
  } catch (err) {
    res.status(500).json({ error: 'Could not delete record.' });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

async function start() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log('MongoDB connected:', MONGO_URL);
    app.listen(PORT, () => {
      console.log('Application running at http://localhost:' + PORT);
    });
  } catch (err) {
    console.error('MongoDB connection failed.');
    console.error(err.message);
    console.error('Make sure MongoDB is installed and running.');
    process.exit(1);
  }
}

start();
