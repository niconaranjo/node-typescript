import express from 'express';
import { products } from './admin';

const shopRouter = express.Router();

shopRouter.get('/', (req, res) => {
  res.render('shop', {products: products, docTitle: 'My Shop', path: '/'})
});

export default shopRouter;
