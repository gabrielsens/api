import { Router } from 'express';
import { listCategories } from './app/useCases/categories/listCategories';

export const router = Router();

// List categories
router.get('/categories', listCategories);

// Create categories
router.post('/categories', (req, res) => {
  res.send('OK');
});

// List products
router.get('/products', (req, res) => {
  res.send('OK');
});

// Create products
router.post('/products', (req, res) => {
  res.send('OK');
});

// get products by category
router.get('/categories/:categoryId/products', (req, res) => {
  res.send('OK');
});

// List order
router.get('/orders', (req, res) => {
  res.send('OK');
});

// Create order
router.post('/orders', (req, res) => {
  res.send('OK');
});

// Change order status
router.patch('/orders/:orderId', (req, res) => {
  res.send('OK');
});

// Delete/cancel order
router.delete('/orders/:orderId', (req, res) => {
  res.send('OK');
});
