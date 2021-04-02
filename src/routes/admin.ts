import express from 'express';
import path from 'path';

import rootDir from './utils/path';

import { product } from '../models/product';

const adminRouter = express.Router();

const products: product[] = [];

adminRouter.get('/add-product', (req, res) => {
  res.render('add-product', {pageTitle: 'Add Product', path: '/admin/add-product'});
});

adminRouter.post('/add-product', (req, res) => {
  const product:product = {title: req.body.title};

  products.push(product);

  res.redirect('/');
});

export { products, adminRouter };
