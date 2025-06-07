import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';

export interface Task {
    id: number;
    title: string;
    description: string;
    status: boolean;
}

@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    getAllTasks(): Task[] {
        return this.tasks;
    }

    createTask(task: CreateTaskDto): CreateTaskDto {
        this.tasks.push({
            ...task,
            id: this.tasks.length + 1
        });
        return task;
    }
}
