class Member {
  constructor(data, container) {
    Object.assign(this, data);
    this.container = container;
  }
  render() {
    const div = document.createElement("div");
    const disponibilidad = this.disponibilidad ? "Disponible" : "No disponible";
    div.textContent = `${this.nombre} — ${this.puesto} (${this.departamento}) — ${disponibilidad}`;
    this.container.appendChild(div);
  }
}
