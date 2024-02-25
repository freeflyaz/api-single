const mongoose = require('mongoose');

main().catch(err => console.log(err));

  async function main () {
   await mongoose.connect('mongodb+srv://dbUser:newDbPass@cluster0.knm2nks.mongodb.net/');
  //await mongoose.connect('mongodb+srv://dbUser:newDbPass@cluster0.knm2nks.mongodb.net/SingleDB');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const topicSchema = new mongoose.Schema({
  // _id: String,
  order: Number,
  name: String,
  answerA: String,
  answerB: String,
  answerC: String,
  answerD: String
});
const Topic = mongoose.model('Topic', topicSchema);


const getTopics = async (id) => {
  const topics = await Topic.findOne({ order: id });
  console.log(topics);
  return topics;
};

// const postTopics = async (topicData) => {
//   const topic = new Topic(topicData);
//   await topic.save();
//   console.log('Topic created:', topic);
//   return topic; 
// };

// const deleteTopics = async (id) => {
//   const result = await Topic.findByIdAndDelete(id);
//   return result;
// };

// const pathTopics = async (id,update) => {
//   const result = await Topic.findOneAndUpdate({_id: id}, update);
//   return result;
// };


module.exports = { getTopics };