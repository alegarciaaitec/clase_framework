import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';

export interface Task {
    id: number;
    title: string;
    description: string;
    priority: number;
    email: string;
    status: boolean;
}

@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    getAllTasks(): Task[] {
        return this.tasks;
    }

    getTask(id: number): Task | NotFoundException {
        const taskFound = this.tasks.find((task) => task.id === id);

        if(!taskFound) {
            return new NotFoundException(`La tarea con el id ${id} no existe`);
        }

        return taskFound;
    }

    createTask(task: CreateTaskDto): CreateTaskDto {
        this.tasks.push({
            ...task,
            id: this.tasks.length + 1
        });
        return task;
    }
}
