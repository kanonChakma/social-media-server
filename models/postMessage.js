import mongoose from 'mongoose';
const { Schema } = mongoose;

const postSchema = new Schema({
  title:  String, // String is shorthand for {type: String}
  message: String,
  creator: String,
  tags:[String],
  selectedFile: String,
  likeCount:{
      type: Number,
      default: 0
  },
  createdAt: {
      type: Date,
      default:new Date()
  },
});
const postMessage = mongoose.model('PostMessage', postSchema);
export default postMessage;