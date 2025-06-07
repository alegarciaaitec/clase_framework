import { Body, Controller, Get, Post } from '@nestjs/common';
import { Task, TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto'

@Controller('tasks')
export class TasksController {

    constructor(private  tasksService: TasksService){}

    @Get()
    getAllTasks(): Task[] {
        return this.tasksService.getAllTasks();
    }

    @Post()
    createTask(@Body() task: CreateTaskDto): CreateTaskDto {
        return this.tasksService.createTask(task);
    }
}
