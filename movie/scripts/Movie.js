class Movie {
  constructor(data, container) {
    Object.assign(this, data);
    this.container = container;
  }
  render() {
    const div = document.createElement("div");
    const destacada = this.puntuacion >= 8;
    div.textContent = `${destacada ? "★ " : ""}${this.titulo} — ${this.director} (${this.anio}) — ${this.puntuacion}/10`;
    if (destacada) div.classList.add("destacada");
    this.container.appendChild(div);
  }
}
