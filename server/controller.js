const model = require('./model');

// https://private-anon-3499e75e9b-codemocracy.apiary-mock.com/topics
const  getTopics = async (req, res) => {
  try {
    const { id } = req.params; // Extract the id from request parameters
    const sendBack = await model.getTopics(id);
    res.send(sendBack);
  } catch (error) {
    console.log('error', error);
    // If an error occurs, send a 500 Internal Server Error response
    res.status(500).send('An error occurred while fetching topics');
  }
};


// const  postTopics = async (req, res) => {
//   const topicData = req.body;
//   const topic = await model.postTopics(topicData);
//   res.status(201).json(topic);
// };

// const  deleteTopics = async (req, res) => {
//   const { id } = req.params; // Extract the id from request parameters
//   const result = await model.deleteTopics(id);
//   if (result) { // This condition might need to be adjusted based on what your model function returns
//     res.send({ message: `Task ${id} deleted successfully.` });
//   } else {
//     res.status(404).send({ message: `Task ${id} not found.` });
//   }
// };

// const  pathTopics = async (req, res) => {
//   const { id } = req.params; // Extract the id from request parameters
//   const update = req.body;
//   const result = await model.pathTopics(id, update);
//   if (result) { // This condition might need to be adjusted based on what your model function returns
//     res.send({ message: `Task ${id} updated successfully.` });
//   } else {
//     res.status(404).send({ message: `Task ${id} not found.` });
//   }
// };



module.exports = { getTopics };
