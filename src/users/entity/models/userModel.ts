import { Schema, model } from 'mongoose';
import { ISchemaUser } from '../types/user';

const schemaUser = new Schema<ISchemaUser>(
  {
    name: {
      type: String,
      required: [true, 'name is required'],
      lowercase: true,
    },
    email: {
      type: String,
      required: [true, 'email is required'],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'La contraseña es obligatoria'],
      minlength: [8, 'La contraseña debe de ser mínimo 8 caracteres'],
    },
    avatarUrl: {
      type: String,
      default: 'https://randomuser.me/api/portraits/men/75.jpg',
    },
    role: {
      type: String,
      default: 'customer',
    },
    addresses: [String],
  },
  {
    timestamps: true,
  }
);

export const userModel = model<ISchemaUser>('User', schemaUser);
