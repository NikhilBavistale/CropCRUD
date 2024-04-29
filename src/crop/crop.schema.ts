import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";



@Schema({
    timestamps: true,
})

export class Crop {
    
    @Prop()
    name: string;

    @Prop()
    type: string;

    @Prop()
    quantity: number;

    @Prop()
    price: number;

    @Prop()
    description: string;

    @Prop()
    status: string;

}

export const CropSchema = SchemaFactory.createForClass(Crop);