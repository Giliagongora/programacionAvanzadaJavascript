import animales from 'animales.json';

let animales = (() => {
  const url = "http://localhost:5051/animales.json";
  const getData = async () => {
    const res = await fetch(url);
    const { animales } = await res.json();
    return animales;
  };
  return { getData };
})();

console.log("Valor de animales con IIFE", animales);
export default animales;
