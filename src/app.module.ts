import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CropModule } from './crop/crop.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/crop-api'),
    CropModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
