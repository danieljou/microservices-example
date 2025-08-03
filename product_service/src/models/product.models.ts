import { Schema, model, Document, Types } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  category: Types.ObjectId;
  owner: string;
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
  owner: { type: String, required: true }
}, {
  timestamps: true
});

export const Product = model<IProduct>('Product', ProductSchema);
