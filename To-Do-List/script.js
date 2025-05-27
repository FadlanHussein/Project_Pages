const todoList = document.getElementById('todoList');
const addButton = document.getElementById('addButton');
const todoInput = document.getElementById('todoInput');

addButton.addEventListener('click', addTodo);
todoInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') addTodo();
});

function addTodo() {
  const task = todoInput.value.trim();
  if (task === "") return;

  const listItem = document.createElement("li");
  listItem.className = "todo-item";
  listItem.innerHTML = `
    <span>${task}</span>
    <button class="edit-btn">Edit</button>
    <button class="remove-btn">Remove</button>
  `;
  todoList.appendChild(listItem);
  todoInput.value = "";

  const editBtn = listItem.querySelector('.edit-btn');
  const removeBtn = listItem.querySelector('.remove-btn');

  editBtn.addEventListener('click', function () {
    const currentText = listItem.querySelector("span");
    const isEditing = this.textContent === "Save";

    if (!isEditing) {
      const input = document.createElement("input");
      input.type = "text";
      input.value = currentText.textContent;
      listItem.replaceChild(input, currentText);
      this.textContent = "Save";

      input.focus();

      input.addEventListener('keypress', function(e) {
        if (e.key === "Enter") saveEdit();
      });

      input.addEventListener('blur', saveEdit);

      function saveEdit() {
        if (input.value.trim() !== "") {
          const newSpan = document.createElement("span");
          newSpan.textContent = input.value.trim();
          listItem.replaceChild(newSpan, input);
          editBtn.textContent = "Edit";
        }
      }

    }
  });

  removeBtn.addEventListener('click', function () {
    listItem.classList.add("removing");
    setTimeout(() => listItem.remove(), 600);
  });
}