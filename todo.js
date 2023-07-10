let tasks = [];

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  const task = taskInput.value;
  if (task) {
    tasks.push({ text: task, checked: false });
    taskInput.value = "";

    renderTasks();
  }
}

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.classList.add( "text-black", "px-4", "py-2", "rounded","flex", "items-center", "justify-around")

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.checked;
    checkbox.addEventListener("change", () => toggleTask(index));
    li.appendChild(checkbox);

    const taskText = document.createElement("span");
    taskText.textContent = task.text;
    if (task.checked) {
      taskText.classList.add("line-through");
    }
    li.appendChild(taskText);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add(
      "px-3",
      "py-1.5",
      "text-sm",
      "rounded",
      "bg-red-500",
      "text-white",
      "hover:bg-red-600",
      "focus:outline-none",
      "focus:ring-2",
      "focus:ring-red-300"
    )
    deleteButton.addEventListener("click", () => deleteTask(index));
    li.appendChild(deleteButton);

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add(
      "px-3",
      "py-1.5",
      "text-sm",
      "rounded",
      "bg-green-500",
      "text-white",
      "hover:bg-green-600",
      "focus:outline-none",
      "focus:ring-2",
      "focus:ring-green-300"
    )
    editButton.addEventListener("click", () => editTask(index));
    li.appendChild(editButton);

    taskList.appendChild(li);
  });
}

function toggleTask(index) {
  tasks[index].checked = !tasks[index].checked;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function editTask(index) {
  const newTask = prompt("Edit task:", tasks[index].text);
  if (newTask) {
    tasks[index].text = newTask;
    renderTasks();
  }
}