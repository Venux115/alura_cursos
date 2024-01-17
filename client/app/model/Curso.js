class Curso {
  constructor(
    id = 0,
    titulo = "Titulo não informado",
    link = "link não informado",
    icone = "sem icone"
  ) {
    this._id = id;
    this._titulo = titulo;
    this._link = link;
    this._icone = icone;
  }

  get id() {
    return this._id;
  }

  get titulo() {
    return this._titulo;
  }

  get link() {
    return this._link;
  }

  get icone() {
    return this._icone;
  }
}