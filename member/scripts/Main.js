class Main {
  constructor() {
    this.members = [];
    this.select = document.getElementById("dept");
    this.container = document.getElementById("lista");
    this.select.addEventListener("change", () => this.render());
  }
  load() {
    fetch("data/team.json")
      .then(res => res.json())
      .then(members => {
        this.members = members;
        this.render();
      });
  }
  render() {
    const departamento = this.select.value;
    this.container.innerHTML = "";
    this.members
      .filter(m => !departamento || m.departamento === departamento)
      .forEach(m => new Member(m, this.container).render());
  }
}
const app = new Main();
app.load();
