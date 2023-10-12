const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/ToDoApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to DB');
  })
  .catch((error) => {
    console.error('Error connecting to DB:', error);
  });

const ToDoApp_schema = new mongoose.Schema({
  task_name: {
    type: String,
    minlength: 1,
    maxlength: 50,
  },
});

const collection_ToDo = mongoose.model("Tasks", ToDoApp_schema);

module.exports = { collection_ToDo };
