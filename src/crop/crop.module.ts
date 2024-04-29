import { Module } from '@nestjs/common';
import { CropController } from './crop.controller';
import { CropService } from './crop.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CropSchema } from './crop.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Crop', schema: CropSchema }])],
  controllers: [CropController],
  providers: [CropService]
})
export class CropModule {}
