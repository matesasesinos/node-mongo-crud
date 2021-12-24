import { Router } from 'express';

const router = Router();

import { renderTasks, createTask, renderTaskEdit, editTask, deleteTask, doneTask } from '../controllers/task.controller';

router.get('/', renderTasks);
router.post('/tasks/add', createTask);
router.get('/tasks/:id/done', doneTask)
router.get('/tasks/:id/edit', renderTaskEdit);
router.post('/tasks/:id/edit', editTask);
router.get('/tasks/:id/delete', deleteTask);

export default router;