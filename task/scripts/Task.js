class Task {
  constructor(data, container) {
    Object.assign(this, data);
    this.container = container;
  }
  render() {
    const div = document.createElement("div");
    const span = document.createElement("span");
    span.textContent = `[${this.categoria}] ${this.texto}`;
    if (this.completed) span.classList.add("hecha");
    const btn = document.createElement("button");
    btn.textContent = "Completar";
    btn.onclick = () => {
      this.completed = true;
      span.classList.add("hecha");
      btn.disabled = true;
    };
    div.append(span, " ", btn);
    this.container.appendChild(div);
  }
}
