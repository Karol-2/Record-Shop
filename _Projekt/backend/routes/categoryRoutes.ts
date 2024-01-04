import express, { Request, Response } from 'express';
import { Category } from '../models/Category.model';
import {categoriesData} from "../data/categoriesData"

const router = express.Router();

let categories: Category[] = categoriesData;


router.get('/categories', (req: Request, res: Response) => {
  res.json(categories);
});

router.get('/categories/:id', (req: Request, res: Response) => {
  const categoryId = parseInt(req.params.id, 10);
  const category = categories.find((c) => c.id === categoryId);

  if (category) {
    res.json(category);
  } else {
    res.status(404).json({ message: 'Category not found' });
  }
});

router.post('/categories', (req: Request, res: Response) => {
  const newCategory: Category = req.body;

  if (newCategory.id && newCategory.name) {
    categories.push(newCategory);
    res.status(201).json(newCategory);
  } else {
    res.status(400).json({ message: 'Invalid category data' });
  }
});

router.put('/categories/:id', (req: Request, res: Response) => {
  const categoryId = parseInt(req.params.id, 10);
  const updatedCategory: Category = req.body;

  const index = categories.findIndex((c) => c.id === categoryId);

  if (index !== -1 && updatedCategory.id && updatedCategory.name) {
    categories[index] = updatedCategory;
    res.json(updatedCategory);
  } else {
    res.status(404).json({ message: 'Category not found or invalid data' });
  }
});

router.delete('/categories/:id', (req: Request, res: Response) => {
  const categoryId = parseInt(req.params.id, 10);
  const index = categories.findIndex((c) => c.id === categoryId);

  if (index !== -1) {
    //TODO: check if there are auctions
    const deletedCategory = categories.splice(index, 1)[0];
    res.json(deletedCategory);
  } else {
    res.status(404).json({ message: 'Category not found' });
  }
});

export default router;