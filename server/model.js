const db = require('./db');



const getTopics = async (id) => {
  return await db.getTopics(id);
};

// const postTopics  = async (topicData) => {
//   return await db.postTopics(topicData);
// };

// const deleteTopics  = async (id) => {
//   return await db.deleteTopics(id);
// };

// const pathTopics  = async (id, update) => {
//   return await db.pathTopics(id, update);
// };


module.exports = { getTopics };