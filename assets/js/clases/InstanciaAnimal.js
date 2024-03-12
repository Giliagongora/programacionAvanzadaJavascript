// import index from '../index.js';
// import Animal from "./Animal.js";

// textAnimal = new Animal;
// console.log(textAnimal);

class textAnimal extends Animal {
    constructor(nombre, edad, imagen, comentarios, sonido) {
        super(nombre, edad, imagen, comentarios, sonido);
       
    }
}

console.log(textAnimal);
export {textAnimal} ;

// export default instanciaAnimal;