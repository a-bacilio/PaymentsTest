import { Types } from 'mongoose';

export default interface ICart {
    type: TypeCart;
    user: Types.ObjectId;
    state: StateCart;
    payment?: Types.ObjectId;
    products: Types.ObjectId;
}

export enum TypeCart {
    A = "prescription",
    B = "session"
}

enum StateCart {
    A = "aproved",
    B = "not reviewed",
    C = "ordered",
    D = "sesssioned"
}