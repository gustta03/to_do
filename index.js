const bancoDeTasks = [];
const getBanco = () => JSON.parse(localStorage.getItem("todoList")) ?? [];

const setBanco = (bancoDeTasks) =>
  localStorage.setItem("todoList", JSON.stringify(bancoDeTasks));

const criarItem = (tarefa, status, indice) => {
  const item = document.createElement("div");
  item.classList.add("todo--area");

  item.innerHTML = `<div class="todo">
  <input type="checkbox" ${status} data-indice=${indice}>
  <div>${tarefa}</div>
  </div>
  <input type="button" value="X" data-indice=${indice}>
  </div>`;
  document.querySelector(".main").appendChild(item);
};

const limparTasks = () => {
  const todoList = document.querySelector(".main");
  while (todoList.firstChild) {
    todoList.removeChild(todoList.lastChild);
  }
};
const removeItem = (indice) => {
  const banco = getBanco();
  banco.splice(indice, 1);
  setBanco(banco);
  atualizarTela();
};

const atualizarItem = (indice) => {
  const banco = getBanco();
  banco[indice].status = banco[indice].status === "" ? "checked" : "";
  setBanco(banco);
  atualizarTela();
};

const atualizarTela = () => {
  limparTasks();
  const banco = getBanco();
  banco.forEach((item, indice) => criarItem(item.tarefa, item.status, indice));
};

const inserirItem = (evento) => {
  const tecla = evento.key;
  const texto = evento.target.value;
  if (tecla === "Enter") {
    const banco = getBanco();
    banco.push({
      tarefa: texto,
      status: "",
    });
    setBanco(banco);
    atualizarTela();
    if(evento.target.value === ""){
      alert('Atenção! voce está criando uma tarefa vazia')
      removeItem()
    }
  }
};

const clickItem = (evento) => {
  const elemento = evento.target;
  console.log(elemento.type);
  if (elemento.type === "button") {
    const indice = elemento.dataset.indice;
    removeItem(indice);
  } else if (elemento.type === "checkbox") {
    const indice = elemento.dataset.indice;
    atualizarItem(indice);
  }
};

document.querySelector("#novoItem").addEventListener("keypress", inserirItem);
document.querySelector(".main").addEventListener("click", clickItem);

atualizarTela();
