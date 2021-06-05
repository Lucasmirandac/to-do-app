import { MongooseModule } from '@nestjs/mongoose';
import { taskSchema } from './schemas/task.schema';

import { Module } from '@nestjs/common';
import { TaskService } from './shared/task.service';
import { TasksController } from './tasks.controller';
@Module({
    imports:[
        MongooseModule.forFeature([{name:'Task', schema: taskSchema}])
    ],
    controllers: [TasksController],
    providers:[TaskService]
})
export class TasksModule {}
