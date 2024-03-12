import animalesJSON from '../../animales.json';

console.log(animalesJSON);

let animales = (() => {
  const url = "http://127.0.0.1:5501/animales.json";
  const getData = async () => {
    const res = await fetch(url);
    const { animales } = await res.json();
    return animales;
  };
  return { getData };
})();

console.log("Valor de animales con IIFE", animales);
console.log("Verificando resultados",animales);

export default animales;


