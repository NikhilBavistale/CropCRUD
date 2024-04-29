import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Crop } from './crop.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class CropService {
  constructor(
    @InjectModel(Crop.name)
    private cropModel: mongoose.Model<Crop>,
  ) {}

  async findAll(): Promise<Crop[]> {
    const crops = await this.cropModel.find();
    return crops;
  }

  async create(crop: Crop): Promise<Crop> {
    const newCrop = await this.cropModel.create(crop);
    return newCrop;
  }

  async findById(id:String): Promise<Crop> {
    const crop = await this.cropModel.findById(id);
    if(!crop) {
        throw new NotFoundException('Crop not found');
    }
    return crop;
  }

  async updateById(id:String, crop: Crop): Promise<Crop> {
    return await this.cropModel.findByIdAndUpdate(id, crop, {
        new: true, 
        runValidators: true
    });
  }

  async deleteById(id:String): Promise<Crop> {
    return await this.cropModel.findByIdAndDelete(id);
  }
}
