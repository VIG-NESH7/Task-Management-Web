function addTask() {

    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if(taskText === ""){
        alert("Please enter a task");
        return;
    }

    let taskList = document.getElementById("taskList");

    let li = document.createElement("li");
    li.className = "task-item";

    li.innerHTML = `
        <span>${taskText}</span>

        <div class="actions">
            <button class="done-btn" onclick="toggleTask(this)">
                Done
            </button>

            <button class="delete-btn" onclick="deleteTask(this)">
                Delete
            </button>
        </div>
    `;

    taskList.appendChild(li);

    taskInput.value = "";
}

function toggleTask(button){
    let taskText =
        button.parentElement.previousElementSibling;

    taskText.classList.toggle("completed");
}

function deleteTask(button){
    let taskItem =
        button.parentElement.parentElement;

    taskItem.remove();
}