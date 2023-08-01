import express from 'express';
import Product from '../models/productModel.js';
import data from '../data.js';
import User from '../models/userModel.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  await User.deleteMany({});
  await Product.deleteMany({});
  await User.collection.dropIndexes();
  await Product.collection.dropIndexes();
  const createdUsers = await User.insertMany(data.users);
  const createdProducts = await Product.insertMany(data.products);
  res.send({ createdProducts, createdUsers });
});
export default seedRouter;
