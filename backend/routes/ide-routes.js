import express from 'express';
export const ideRoutes = express.Router();
ideRoutes.post('/compile');
ideRoutes.post('/execute');
ideRoutes.get('/question');
ideRoutes.get('/questions');