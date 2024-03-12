import Animales from 'Animales.js';
// const Animales = require('Animales.js');
console.log(Animales);


document.getElementById("btnRegistrar").addEventListener("click", function () {
  let eAnimal = document.getElementById("animal");
  let valueAnimal = eAnimal.value;
  let textAnimal = eAnimal.options[eAnimal.selectedIndex].text;
  console.log(textAnimal);

  let eEdad = document.getElementById("edad");
  let textEdad = eEdad.options[eEdad.selectedIndex].text;
  console.log(textEdad);

  let eComentarios = document.getElementById("comentarios");
  let valueComentarios = eComentarios.value;
  // console.log(valueComentarios);

  const imagenesAnimales = [
    { nombre: "Águila", ruta: "assets/imgs/Aguila.png" },
    { nombre: "León", ruta: "assets/imgs/leon.png" },
    { nombre: "Lobo", ruta: "assets/imgs/Lobo.jpg" },
    { nombre: "Oso", ruta: "assets/imgs/Oso.jpg" },
    { nombre: "Serpiente", ruta: "assets/imgs/Serpiente.jpg" },
  ];


  for (const imagen of imagenesAnimales) {

    if (imagen.nombre == textAnimal) {

      let elem = document.createElement("img");
      elem.setAttribute("src", `  ${imagen.ruta}`);
      document.getElementById("preview").appendChild(elem);
      let elem1 = elem.cloneNode(true);
      document.getElementById("Animales","preview").appendChild(elem1);

    }

  }


  const sonidosAnimales = [
    { nombre: "Águila", ruta: "assets/sounds/Chillido.mp3" },
    { nombre: "León", ruta: "assets/sounds/Rugido.mp3" },
    { nombre: "Lobo", ruta: "assets/sounds/Aullido.mp3" },
    { nombre: "Oso", ruta: "assets/sounds/Grunido.mp3" },
    { nombre: "Serpiente", ruta: "assets/sounds/Siseo.mp3" },
  ];


  for (const sonido of sonidosAnimales) {
// console.log(sonido)
    if (sonido.nombre == textAnimal) {

      let elemAudio = document.createElement("audio");
      elemAudio.setAttribute("src", `  ${sonido.ruta}`);
      console.log(elemAudio);

      // Establecer los atributos del elemento de audio
      elemAudio.setAttribute("controls", "");
      elemAudio.setAttribute("autoplay", "");

      // Crear y agregar las fuentes de audio
let sourceAudio = document.createElement("source");
sourceAudio.setAttribute("src", `${sonido.ruta}`);
sourceAudio.setAttribute("type", "audio/" ,` ${sonido.nombre}`);
console.log(sourceAudio);
player.appendChild(sourceAudio);

var sourceMp3 = document.createElement("source");
sourceMp3.setAttribute("src", ` ${sonido.ruta}`);
sourceMp3.setAttribute("type", "audio/mpeg");
player.appendChild(sourceMp3);
    //   document.getElementById("preview").appendChild(elem);
    //   let elem1 = elem.cloneNode(true);
    //   document.getElementById("Animales","preview").appendChild(elem1);

    }

  }





});


class Animales {
  constructor(nombre, edad, imagen, comentarios, sonido) {
    this._nombre = nombre;
    this._edad = edad;
    this._imagen = imagen;
    this._comentarios = comentarios;
    this._sonido = sonido;
  }

  get nombre() {
    return this._nombre;
  }
  set nombre(value) {
    this._nombre = value;
  }

  get edad() {
    return this._edad;
  }
  set edad(value) {
    this._edad = value;
  }

  get imagen() {
    return this._imagen;
  }
  set imagen(value) {
    this._imagen = value;
  }

  get comentarios() {
    return this._comentarios;
  }
  set comentarios(value) {
    this._comentarios = value;
  }

  get sonido() {
    return this._sonido;
  }

  set sonido(value) {
    this._sonido = value;
  }

  emitirSonido() {
    return this._sonido;
  }
}

// let a1 = new Animal("Jack", 20, "alo" , "kjasd", "akjsd");
// console.log(a1);
// function flecha ES6
// (() => {
//     ...declaraciones...
//     })();

// const miAnimal = new Animal("León", 5, "imagen.jpg", "Un león rugiendo", "¡Rugido!");

// console.log(miAnimal.nombre); // Salida: León

// miAnimal.nombre = "Tigre";
// console.log(miAnimal.nombre); // Salida: Tigre

// Luego de crear la clase creamos a los hijos de la clase padre

// class Largometraje extends Pelicula {
//     constructor(name, runTime) {
//     super(name);
//     this._runTime = runTime;
//     }
//     getRuntime() {
//     return this._runTime;
//     }
//     setRuntime(runTime) {
//     this._runTime = runTime;
//     }

// class Leon extends Animal{
//     constructor(nombre, edad, imagen, comentarios, sonido) {
//         super(nombre, edad, imagen, comentarios, sonido);
//         this._nombre = nombre;
//     }

//     }





