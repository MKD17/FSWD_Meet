const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { collection_ToDo } = require('./mongodbCon');
const cors = require('cors'); // Import the cors package
app.use(express.json());
app.use(cors());
app.get('/todo', async (req, res) => {
  try {
    const data = await collection_ToDo.find({});
    res.json(data); // Send data as JSON response
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// POST route to add a task
app.post('/todo', async (req, res) => {
  const { task_name } = req.body;

  try {
    const newTask = new collection_ToDo({ task_name: task_name });
    await newTask.save();
    res.status(201).json({ message: 'Task added successfully' });
  } catch (error) {
    console.error('Error adding task:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.listen(5000, () => {
  console.log("Listening on port 5000");
});
