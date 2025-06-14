import { Body, Controller, Get, NotFoundException, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { Task, TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { ValidatetaskPipe } from './pipes/validatetask/validatetask.pipe'
import { ApiQuery } from '@nestjs/swagger'

@Controller('tasks')
export class TasksController {

    constructor(private  tasksService: TasksService){}

    @Get()
    getAllTasks(): Task[] {
        return this.tasksService.getAllTasks();
    }

    /*@Get('/:id')
    getTask(@Param('id', ParseIntPipe) id: number) : Task | NotFoundException {
        return this.tasksService.getTask(id);
    }*/

    @Get('especifico') // /1  ?id=1
    @ApiQuery({ name: 'id', required: true, type: Number, example: 1 })
    getTask(@Query(ValidatetaskPipe) query: { id: number }) : Task | NotFoundException {
        console.log(query.id);
        return this.tasksService.getTask(query.id);
    }

    @Post()
    createTask(@Body() task: CreateTaskDto): CreateTaskDto {
        return this.tasksService.createTask(task);
    }
}
