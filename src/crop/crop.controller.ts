import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CropService } from './crop.service';
import { Crop } from './crop.schema';
import { CreateCropDto } from './create-crop.dto';
import { UpdateCropDto } from './update-crop.dto';

@Controller('crops')
export class CropController {
  constructor(private cropService: CropService) {}

  @Get()
  async getAllCrops(): Promise<Crop[]> {
    return await this.cropService.findAll();
  }

  @Post()
  async createCrop(
    @Body()
    crop: CreateCropDto,
  ): Promise<Crop> {
    return await this.cropService.create(crop);
  }

  @Get(':id')
  async getCrop(
    @Param('id')
    id: string,
  ): Promise<Crop> {
    return await this.cropService.findById(id);
  }

  @Put(':id')
  async updateCrop(
    @Param('id')
    id: string,
    @Body()
    crop: UpdateCropDto,
  ): Promise<Crop> {
    return this.cropService.updateById(id,crop);
  }

  @Delete(':id')
  async deleteCrop(
    @Param('id')
    id: string,
  ): Promise<Crop> {
    return this.cropService.deleteById(id);
  }
}
