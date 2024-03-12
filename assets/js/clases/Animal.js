class Animal {
  constructor(nombre, edad, imagen, comentarios, sonido) {
    // let Nombre = nombre;
    // this.getNombre = () => Nombre;

    let Edad = edad;
    this.getEdad = () => Edad;

    let Imagen = imagen;
    this.getImagen = () => Imagen;

    let Comentarios = comentarios;
    this.getComentarios = () => Comentarios;

    let Sonido = sonido;
    this.getSonido = () => Sonido;
  }

  get Nombre() {
    return this._getNombre();
  }
  set Nombre(value) {
    return (this._nombre = () => {
      return value;
    });
  }

  get Edad() {
    return this._getEdad();
  }
  set Edad(value) {
    return (this._edad = () => {
      return value;
    });
  }

  get Imagen() {
    return this._getImagen();
  }
  set Imagen(value) {
    return (this._imagen = () => {
      return value;
    });
  }

  get Comentarios() {
    return this._getComentarios();
  }
  set Comentarios(value) {
    return (this._comentarios = () => {
      return value;
    });
  }

  get Sonido() {
    return this._getSonido;
  }

  set Sonido(value) {
    return (this._sonido = () => {
      return value;
    });
  }

  emitirSonido() {
    return this._sonido;
  }
}


export default Animal;