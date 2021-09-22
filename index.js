const bancoDeTasks = [];

const criarItem = (tarefa, status) => {
  const item = document.createElement("div");
  item.classList.add("todo--area");

  item.innerHTML = `<div class="todo">
  <input type="checkbox" ${status}>
  <div>${tarefa}</div>
  </div>
  <div class="remove">
  <img src="img/icons8-excluir.svg" width="14px">
  </div>`;
  document.querySelector(".main").appendChild(item);
};

const limparTasks = () => {
  const todoList = document.querySelector(".todo--area");
  while (todoList.firstChild) {
    todoList.removeChild(todoList.lastChild);
  }
};

const atualizarTela = () => {
  limparTasks();
  bancoDeTasks.forEach((item) => criarItem(item.tarefa, item.status));
};

const inserirItem = (evento) => {
  const tecla = evento.key;
  const texto = evento.target.value;
  if (tecla === "Enter") {
    bancoDeTasks.push({ tarefa: texto, status: "" });
    evento.target.value = "";
    atualizarTela();
  }
};

const clickItem = (evento) => {
  const elemento = evento.target;
  console.log(elemento.type);
  if (elemento.type === "button") {
    const indice = elemento.dataset.indice;
    removerItem (indice)
  }else if(elemento.type === checkbox){
    const indice = elemento.dataset.indice;
    atualizarItem(indice)
  }
};

document.querySelector("#novoItem").addEventListener("keypress", inserirItem);
document.querySelector(".main").addEventListener("click", clickItem);

atualizarTela();
