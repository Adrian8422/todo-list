const state = {
  data: {
    tasks: [
      { id: 1, text: "Primer item", completed: true },
      { id: 2, text: "Segundo item", completed: true },
      { id: 3, text: "Tercer item", deleted: true },
    ],
  },
  listeners: [],

  init() {
    const localData = JSON.parse(localStorage.getItem("saved-tarea"));
    if (!localData) {
      return;
    } else {
      this.setState(localData);
    }
  },

  getState() {
    return this.data;
  },
  getActiveTasks() {
    const currentState = this.getState();
    return currentState.tasks.filter((t) => !t.deleted);
  },

  addTasks(taskText: string) {
    const currentState = this.getState();

    const limitedTasks = 200;
    const currentsId = currentState.tasks.map((t) => t.id);
    if (currentsId.length == limitedTasks) {
      alert("Much tasks bro! Low state");
      return;
    }
    let tasksId = Math.floor(Math.random() * limitedTasks) + 1;
    while (currentsId.includes(tasksId)) {
      tasksId = Math.floor(Math.random() * limitedTasks) + 1;
    }
    const newTask = {
      id: tasksId,
      text: taskText,
      completed: false,
      deleted: false,
    };
    currentState.tasks.push(newTask);
    this.setState(currentState);
  },
  setState(newState) {
    this.data = newState;
    localStorage.setItem("saved-tarea", JSON.stringify(this.data));
    for (const cb of this.listeners) {
      cb();
    }
    console.log("Soy el state eh cambiado", this.data);
  },

  changeItemState(id, value: boolean) {
    const currentState = this.getState();
    const found = currentState.tasks.find((t) => t.id == parseInt(id));
    found.completed = value;
    this.setState(currentState);
  },
  deleteTasks(tasksId) {
    const currentState = this.getState();
    const foundTasks = currentState.tasks.find(
      (t) => t.id == parseInt(tasksId)
    );
    foundTasks.deleted = true;
    this.setState(currentState);
  },
  subscribe(callback: (any) => any) {
    this.listeners.push(callback);
  },
};

export { state };
