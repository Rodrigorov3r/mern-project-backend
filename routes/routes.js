import express from 'express';
import {
  createBlog,
  deleteBlog,
  getAllBlogs,
  getBlog,
  updateBlog,
} from '../controllers/BlogController.js';

const rutas = express.Router();

rutas.get('/', getAllBlogs);
rutas.get('/:id', getBlog);
rutas.post('/', createBlog);
rutas.put('/:id', updateBlog);
rutas.delete('/id', deleteBlog);

export default rutas;
