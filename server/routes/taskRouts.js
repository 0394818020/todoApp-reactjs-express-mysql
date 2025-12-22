import taskController from "../controller/taskController.js";
import express from 'express';

const taskRouter = express.Router();

taskRouter.post('/add', taskController.add);
taskRouter.put('/update/:id', taskController.update);
taskRouter.get('/tasks', taskController.getAll);
taskRouter.delete('/delete/:id', taskController.delete);
taskRouter.put('/finishTask/:id', taskController.finishTask)

export default taskRouter;
