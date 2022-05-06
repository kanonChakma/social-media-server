import mongoose from "mongoose";
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
     res.status(404).json({message: error.message});  
   } 
}

export const updatePost = async(req,res) => {
  const {id:_id} = req.params;
  const post = req.body;
  console.log(post);
 if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No Post With That id');
 const updatedPost = await postMessage.findByIdAndUpdate(_id, post, {new: true}); 
 
 console.log(updatedPost);
 res.json(updatedPost);
}