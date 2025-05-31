import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {

    constructor(private  tasksService: TasksService){}

    @Get()
    getAllTasks(): string {
        return this.tasksService.getAllTasks();
    }

    @Post()
    createTask(@Body() task: any): string {
        return this.tasksService.createTask(task);
    }
}
