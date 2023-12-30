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
    isEndangered: true,
    food: {
        diet: 'meat-eater',
        favouriteFood: 'salmon',
        hasAllergies: false,
    },
}
const bearJadwiga: Animal = {
    name: 'Jadwiga',
    species: 'polar bear',
    age: 7,
    gender: AnimalGender.FEMALE,
    status: AnimalStatus.HEALTHY,
    isEndangered: true,
    food: {
        diet: 'meat-eater',
        hasAllergies: false,
    },
}
const lemur: Animal = {
    name: 'Julian',
    species: 'lemur',
    age: 3,
    gender: AnimalGender.MALE,
    status: AnimalStatus.SICK,
    isEndangered: false,
    food: {
        diet: 'plant-eater',
        favouriteFood: 'mango',
        hasAllergies: true,
    },
}

const myZoo: Zoo = new Zoo()

myZoo.addAnimal(bearWojtek)
myZoo.addAnimal(bearJadwiga)
myZoo.addAnimal(lemur)

// console.log(myZoo.getAnimalByNameAndSpecies("sdsd","sds"))
// console.log(myZoo.getAnimalByNameAndSpecies("wojtek","polar bear"))

// myZoo.updateAnimal("Wojtek","polar bear",{age: 10, name: "Janusz"})
// myZoo.updateAnimal("Julian","Lemur",{age: 20, name: "Julek"})
// console.log(myZoo.getAnimals())

// myZoo.updateAnimal("Julian","Lemur",{color: "red", name: "Julek"})
// console.log(myZoo.getAnimals())

// console.log(myZoo.getAnimalsOfSpecies("polar bear"))


// myZoo.deleteAnimal('wojtek','polar bear')
// myZoo.deleteAnimal('julian','lemur')
// myZoo.deleteAnimal('jadwiga','polar bear')


// const response: unknown = myZoo.addAnimal(bearWojtek)
// if (typeof response === 'string'){
//     console.log(response)
// }


// console.log(myZoo.getAnimals())
// console.log(myZoo.getAnimalsOfSpecies('lemur'))