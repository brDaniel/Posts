import { Router } from "express";
import {getPost, newPost, updatePost, deletePost,getAllPosts} from "../controllers/posts.controller.js";

const router = Router()
router.get('/posts', getAllPosts)
router.post('/posts', newPost)
router.put('/posts/:id', updatePost)
router.delete('/posts/:id', deletePost)
router.get('/posts/:id', getPost)

export default router

