import express from 'express';
import path from 'path';

import rootDir from './utils/path';

import { product } from '../models/product';


const adminRouter = express.Router();

const products: product[] = [];

adminRouter.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

adminRouter.post('/add-product', (req, res, next) => {
  products.push(req.body.title)
  res.redirect('/');
});

export  {
  products,
  adminRouter
};