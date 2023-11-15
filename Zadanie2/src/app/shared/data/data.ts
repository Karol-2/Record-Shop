import {v4 as uuidv4} from 'uuid';
import { Animal } from '../models/Animal.model';
import { AnimalStatus } from '../enums/AnimalStatus.enum';
import { AnimalGender } from '../enums/AnimalGender.enum';

export const users: Animal[] = [
  {
    id: uuidv4(),
    name: 'Anna',
    gender: AnimalGender.FEMALE,
    species: 'Polar Bear',
    age: 5,
    status: AnimalStatus.HEALTHY,
    isEndangered: true,
  },
  {
    id: uuidv4(),
    name: 'Julian',
    gender: AnimalGender.MALE,
    species: 'Lemur',
    age: 3,
    status: AnimalStatus.SICK ,
    isEndangered: false,
  }
 
];
