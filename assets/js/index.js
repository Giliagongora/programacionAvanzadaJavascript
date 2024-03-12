// import { animales } from "./Animales.js";
// import InstanciaAnimales from "../js/clases/InstanciaAnimal.js";

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
      document.getElementById("Animales", "preview").appendChild(elem1);
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
      sourceAudio.setAttribute("type", "audio/", ` ${sonido.nombre}`);
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
