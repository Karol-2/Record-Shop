import { Zoo } from "./classes/Zoo.class";
import { AnimalGender } from "./enums/AnimalGender.enum";
import { AnimalStatus } from "./enums/AnimalStatus.enum";
import { Animal } from "./models/Animal.model";

const bearWojtek: Animal = {
    name: 'Wojtek',
    species: 'polar bear',
    age: 5,
    gender: AnimalGender.MALE,
    status: AnimalStatus.HEALTHY,
    food: {
        diet: 'meat-eater',
        favouriteFood: 'salmon'
    },
}

const bearJadwiga: Animal = {
    name: 'Jadwiga',
    species: 'polar bear',
    age: 7,
    gender: AnimalGender.FEMALE,
    status: AnimalStatus.HEALTHY,
    food: {
        diet: 'meat-eater'
    },
}
const lemur: Animal = {
    name: 'Julian',
    species: 'lemur',
    age: 3,
    gender: AnimalGender.MALE,
    status: AnimalStatus.SICK,
    food: {
        diet: 'plant-eater',
        favouriteFood: 'mango'
    },
}

const myZoo: Zoo = new Zoo()

myZoo.addAnimal(bearWojtek)
myZoo.addAnimal(bearJadwiga)
myZoo.addAnimal(lemur)

// myZoo.deleteAnimal('wojtek','polar bear')
// myZoo.deleteAnimal('julian','lemur')
// myZoo.deleteAnimal('jadwiga','polar bear')


// console.log(myZoo.getAnimals())
// console.log(myZoo.getAnimalsOfSpecies('lemur'))