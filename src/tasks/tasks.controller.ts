import { Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {

    constructor(private  tasksService: TasksService){}

    @Get()
    getAllTasks(): string {
        return this.tasksService.getAllTasks();
    }

    @Post()
    createTask(): string {
        return this.tasksService.createTask();
    }
}
