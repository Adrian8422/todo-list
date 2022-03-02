const imgDeleted = require("url:../../images/paper-recicle.png");

class TodoItem extends HTMLElement {
  shadow: ShadowRoot;
  title: string;
  checked: boolean = false;
  todoId: string;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.title = this.getAttribute("title");
    this.checked = JSON.parse(this.getAttribute("checked"));
    this.todoId = this.getAttribute("id");
    const style = document.createElement("style");
    style.innerHTML = `

    * {
    box-sizing: border-box;
    }

    .container-card {
        display: grid;
        grid-template: 1fr / minmax(0, 1fr) 25px;
        column-gap: 7.5px;
        
        min-height: 100px;
        padding: 15px;
        
        background-color: #fff599;
        border-radius: 4px;
        box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.5);
    }
    .todo-item-active {
        border: 1px solid black;
    }

    .todo-item__text {
        margin: 0;
    
        font-size: 18px;
        overflow-wrap: break-word;
    }

    .checked-text{
        text-decoration: line-through;
    }
    
    .container-checked__remove{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    
        padding: 2.5px 0;
    }
    
    .interactive-input{
        margin: 0;
    }
    
    .interactive-delete {
        width: 80%;
        height: 20px;
    
        cursor: pointer;
    }
    
    
    
    `;

    this.render();
    this.shadow.appendChild(style);
  }

  addListeners() {
    const cardEl = this.shadow.querySelector(".container-card");
    const deleteEl: HTMLElement = this.shadow.querySelector(
      ".interactive-delete"
    );
    const checkboxEl: HTMLElement =
      this.shadow.querySelector(".interactive-input");

    checkboxEl.addEventListener("click", (e) => {
      e.stopPropagation();
      const eventTarget: any = e.target;

      const checkEvent = new CustomEvent("change", {
        detail: {
          id: this.todoId,
          value: eventTarget.checked,
        },
      });
      this.dispatchEvent(checkEvent);
    });

    this.addEventListener("click", () => {
      const cardClass = cardEl.classList;
      if (cardClass.contains("todo-item-active")) {
        cardClass.remove("todo-item-active");
        deleteEl.style.display = "none";
      } else {
        cardClass.add("todo-item-active");
        deleteEl.style.display = "initial";
      }
    });

    deleteEl.addEventListener("click", (e) => {
      e.stopPropagation();
      const deleteEvent = new CustomEvent("delete", {
        detail: {
          id: this.todoId,
        },
      });
      this.dispatchEvent(deleteEvent);
    });
  }
  render() {
    this.shadow.innerHTML = `
    
    <div class="container-card">
    <p class="todo-item__text ${this.checked ? "checked-text" : ""}">${
      this.title
    }</p>
    
    <div class="container-checked__remove">
      <input  type="checkbox" ${
        this.checked ? "checked" : ""
      } class="interactive-input"/>

      <img src="${imgDeleted}" style="display: none;" class="interactive-delete"/> 
    </div>
  </div>
    
    `;
    this.addListeners();
  }
}
customElements.define("todo-items", TodoItem);
