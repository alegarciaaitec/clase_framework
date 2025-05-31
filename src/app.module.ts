import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [TasksModule],
  controllers: [UsersController],
  providers: [],
})
export class AppModule {}
