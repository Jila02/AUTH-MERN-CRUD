import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { createTask,getTaskbyId,getTasks,deleteTask,updateTask } from "../controllers/task.controller.js";
import {validateSchema} from "../middlewares/validator.middleware.js"
import {createTaskSchema} from "../schemas/tasks.schema.js"



const router=Router();

router.get('/tasks',authRequired,getTasks)

router.get('/tasks/:id',authRequired,getTaskbyId)

router.delete('/tasks/:id',authRequired,deleteTask)

router.put('/tasks/:id',authRequired,updateTask)

router.post('/tasks',authRequired,validateSchema(createTaskSchema),createTask)


export default router