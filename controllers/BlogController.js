//importo el modelo a trabajar
import { json } from 'sequelize/types';
import BlogModel from '../models/BlogModel';

//get all
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await BlogModel.findAll();
    res.json(blogs);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//get por id
export const getBlog = async (req, res) => {
  //where por params
  try {
    const blog = await BlogModel.findAll({
      where: { id: req.params.id },
    });
    res.json(blog);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//post
export const createBlog = async (req, res) => {
  //metodo create por body git
  try {
    await BlogModel.create(req.body);
    res.json({ mensaje: 'creado!' });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//update
export const updateBlog = async (req, res) => {
  try {
    await BlogModel.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({ mensaje: 'update ok!' });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//delete
export const deleteBlog = async (req, res) => {
  try {
    await BlogModel.destroy(req.body, {
      where: { id: req.params.id },
    });
    res.json({ mensaje: 'registro eliminado' });
  } catch (error) {
    res.json({ message: error.message });
  }
};
