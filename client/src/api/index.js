import axios from "axios";
const url = "http://localhost:5000/posts";

export const fetchPost = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (postId, post) =>
  axios.patch(`${url}/${postId}`, post);
export const deletePost = (postId) => axios.delete(`${url}/${postId}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
