const form = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const dueDate = document.getElementById("due-date").value;
  const assignedTo = document.getElementById("assigned-to").value;
  const attachments = document.getElementById("attachments").files;

  const todoCard = document.createElement("div");
  todoCard.className = "col-12 todo-card";

  // Attachments count
  const attachmentCount = attachments.length > 0 
    ? `<span class="badge bg-secondary">${attachments.length} attachment(s)</span>` 
    : "";

  todoCard.innerHTML = `
    <div class="card shadow-sm">
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${description}</p>
        <p><strong>Due:</strong> ${dueDate || "N/A"} | <strong>Assigned:</strong> ${assignedTo || "N/A"}</p>
        ${attachmentCount}
        <div class="mt-2">
          <button class="btn btn-sm btn-danger delete-btn"><i class="bi bi-trash"></i> Delete</button>
        </div>
        </div>
    </div>
     `;

  // Delete functionality
  todoCard.querySelector(".delete-btn").addEventListener("click", function () {
    todoCard.remove();
  });

  // Add to page
  todoList.appendChild(todoCard);

  // Reset form
  form.reset();
});

