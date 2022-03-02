import { state } from "../state";

export function initHomePage(containerEl: Element) {
  function renderTasks(itemContainer: Element, taskList: Array<any>) {
    itemContainer.innerHTML = "";
    const sortedTaskList = taskList.sort((t) => t.completed);
    sortedTaskList.forEach((t) => {
      const todoItemEl = document.createElement("todo-items");

      todoItemEl.setAttribute("title", t.text);
      todoItemEl.setAttribute("id", t.id);
      todoItemEl.setAttribute("checked", t.completed);

      todoItemEl.addEventListener("change", (e: any) => {
        state.changeItemState(e.detail.id, e.detail.value);
      });
      todoItemEl.addEventListener("delete", (e: any) => {
        state.deleteTasks(e.detail.id);
      });
      itemContainer.appendChild(todoItemEl);
    });
  }
  containerEl.innerHTML = ` 
  <header-element></header-element>
  <div class="container-page">
  <h1 class="title-page">Mis pendientes</h1>
  <form class="form-page">
    <div class="container-form-input">
      <label for="pendinput" class="label-form">Nuevo pendiente</label>
      <input
        type="text"
        autocomplete="off"
        class="form__input"
        id="pendinput"
      />
    </div>
    <button class="button-form">Agregar</button>
  </form>
  <div class="todo-container"></div>
 </div>
  
  
  `;

  const currenstateTasks = state.getActiveTasks();

  const itemContainer = containerEl.querySelector(".todo-container");
  renderTasks(itemContainer, currenstateTasks);

  containerEl.querySelector(".form-page").addEventListener("submit", (e) => {
    e.preventDefault();

    const inputEl: any = containerEl.querySelector(".form__input");
    const inputText = inputEl.value.trim();

    if (inputText == "") {
      return;
    }
    state.addTasks(inputText);

    inputEl.value = "";
  });
  state.subscribe(() => {
    renderTasks(itemContainer, state.getActiveTasks());
  });
}
