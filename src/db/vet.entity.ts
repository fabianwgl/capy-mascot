import { model, Schema, Types } from 'mongoose';

export interface IVet {
  name: string;
  address: string;
  webpage: string;
  facebook: string;
  instagram: string;
  email: string;
  phone: string;
  services: string;
  animals: string;
  city: string;
  schedules: string;
}

export const VetSchema = new Schema<IVet>(
  {
    name: { type: 'String', required: true },
    address: { type: 'String', required: true },
    webpage: { type: 'String', required: false },
    facebook: { type: 'String', required: false },
    instagram: { type: 'String', required: false },
    email: { type: 'String', required: false },
    phone: { type: 'String', required: false },
    services: { type: 'String', required: false },
    animals: { type: 'String', required: false },
    city: { type: 'String', required: false },
    schedules: { type: 'String', required: false },
  },
  { timestamps: true }
);

export const Vet = model<IVet>('vets', VetSchema);
