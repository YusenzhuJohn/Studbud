// I learned some code from this board js creation from youtube: https://youtu.be/m3StLl-H4CY

const todos = document.querySelectorAll(".todo");
const columns = document.querySelectorAll(".column");
// drag all of the columns
let draggableTodo = null;

// looping through every single one of of the todo 
todos.forEach((todo) => {
  todo.addEventListener("dragstart", dragStart);
  todo.addEventListener("dragend", dragEnd);
});
//dragstart and drageend function, when drag the tasklist show the dragstart, when leave it, show dragend
function dragStart() {
  draggableTodo = this;
  setTimeout(() => {
    this.style.display = "none";
  }, 0);
  console.log("dragStart");
}

function dragEnd() {
  draggableTodo = null;
  setTimeout(() => {
    this.style.display = "block";
  }, 0);
  console.log("dragEnd");
}

columns.forEach((Column) => {
  Column.addEventListener("dragover", dragOver);
  Column.addEventListener("dragenter", dragEnter);
  Column.addEventListener("dragleave", dragLeave);
  Column.addEventListener("drop", dragDrop);
});

// drag over is an event attched to drop target which in this case the drop target is all of these columns or the one has class of colmuns
// drag over kick sin when the draggable element is over the drop target
function dragOver(e) {
  e.preventDefault();
  //  enable drag and drop
}
// when the drag element enters the drop target the swing drag enter kicks in this event
function dragEnter() {
  this.style.border = "1px dashed #ccc";
  // enable effect when drag to different column
  console.log("dragEnter");
}
// when the dragged element leaves the drop target that's when drag leave event kciks in 
function dragLeave() {
  this.style.border = "none";
  console.log("dragLeave");
}
// when dragged element is dropped on a drop target
function dragDrop() {
  this.style.border = "none";
  this.appendChild(draggableTodo);
  console.log("dropped");
}

/* create */
const btns = document.querySelectorAll("[data-target-create]");
const close_creates = document.querySelectorAll(".close-create");
const overlay = document.getElementById("overlay");
//click the button and show the create page 
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(btn.dataset.targetCreate).classList.add("active");
    overlay.classList.add("active");
  });
  
});
//grab all of creates looping over everyone 
close_creates.forEach((btn) => {
  btn.addEventListener("click", () => {
    const create = btn.closest(".create");
    create.classList.remove("active");
    overlay.classList.remove("active");
  });
});

// open the overlay and close the overlay
window.onclick = (event) => {
  if (event.target == overlay) {
    const creates = document.querySelectorAll(".create");
    creates.forEach((create) => create.classList.remove("active"));
    overlay.classList.remove("active");
  }
};

// create to dolist
const todo_submit = document.getElementById("todo_submit");
todo_submit.addEventListener("click", createTodo);

//task name, duedate, completiontime, estimatetime and priority.The tasklist code leanred from DECO2017 week 5
function createTodo() {
  const todo_div = document.createElement("div");
  const input_val = document.getElementById("todo_input").value;
  const input_val2 = document.getElementById("duedate_input").value;
  const input_val3 = document.getElementById("completionTime_input").value;
  const input_val4 = document.getElementById("estimatedTime_input").value;
  const input_val5 = document.getElementById("priority_input").value;

  



//enable the conent show in the console log.
  const txt = document.createTextNode(input_val);
  const dte = document.createTextNode(input_val2);
  const ct = document.createTextNode(input_val3);
  const et = document.createTextNode(input_val4);
  const pr = document.createTextNode(input_val5);

  todo_div.appendChild(txt);
  todo_div.appendChild(dte);
  todo_div.appendChild(ct);
  todo_div.appendChild(et);
  todo_div.appendChild(pr);

  console.log(todo_div)
  todo_div.classList.add("todo");
  todo_div.setAttribute("draggable", "true");

  // 
  const span = document.createElement("span");
  const span_txt = document.createTextNode("\u00D7");
  span.classList.add("close");
  span.appendChild(span_txt);

  todo_div.appendChild(span);
// add task on the left column 1
  left_column.appendChild(todo_div);
  

  span.addEventListener("click", () => {
    span.parentElement.style.display = "none";
  });
  

  todo_div.addEventListener("dragstart", dragStart);
  todo_div.addEventListener("dragend", dragEnd);

  document.getElementById("todo_input").value = "";
  todo_form.classList.remove("active");
  overlay.classList.remove("active");
}

// close the creates taks 
const close_btns = document.querySelectorAll(".close");

close_btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.style.display = "none";
  });
});


