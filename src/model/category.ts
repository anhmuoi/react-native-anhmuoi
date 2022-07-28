import { Image } from './restaurant';

export interface Category {
    _createdAt: Date;
    _id: String;
    _rev: String;
    _type: String;
    _updatedAt: String;
    image: Image;
    name: String;
}

