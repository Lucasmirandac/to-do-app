import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://db_user:FutPoBQSRfP0NHoj@cluster0.fpbzq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
    TasksModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
