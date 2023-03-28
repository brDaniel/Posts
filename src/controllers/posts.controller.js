import Post from "../models/Post.js";
import { deleteImage, uploadImage } from "../libs/cloudinary.js";
import { remove } from "fs-extra";
import { json } from "express";

//return all data from Posts
export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    // res.send(posts);
    return res.json(posts);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
//create a new post
export const newPost = async (req, res) => {
  try {
    const { title, description } = req.body;
    let image;
    if (req.files.image) {
      const resutl = await uploadImage(req.files.image.tempFilePath);
      remove(req.files.image.tempFilePath);
      image = {
        url: resutl.secure_url,
        public_id: resutl.public_id,
      };
    }
    const newPost = new Post({ title, description, image });
    await newPost.save();
    return res.json(newPost);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
//modify a post
export const updatePost = async (req, res) => {
  try {
    // const post = await Post.findByIdAndUpdate(req.params.id, req.body);
    const updatedPost = await Post.updateOne({ _id: req.params.id }, req.body, {
      new: true,
    });
    return res.send(updatedPost);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};
//delete a post
export const deletePost = async (req, res) => {
  try {
    const postRemoved = await Post.findByIdAndDelete(req.params.id);
    if (!postRemoved) return res.sendStatus(404);
    if (postRemoved.image.public_id){
      await deleteImage(postRemoved.image.public_id)
    }
    return res.sendStatus(202);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
//return a Post data
export const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.sendStatus(404);
    return res.json(post);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
