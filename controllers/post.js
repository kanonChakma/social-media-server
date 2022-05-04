import postMessage from "../models/postMessage.js";

export const createPost = async(req,res) => {
    const post=req.body; 
    const newPost =new postMessage(post);
    try{
     await newPost.save();
     res.status(201).json(newPost);
  }catch(error){
      res.status(404).send({message: error.message});
  }
}
export const getPost = async(req,res) => {
   try {
       const response= await postMessage.find();
       res.status(200).json(response);
   } catch (error) {
     res.status().json({message: error.message});  
   } 
}