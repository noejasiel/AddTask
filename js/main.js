var form = document.getElementById("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  var text = document.getElementById("text");
  var textarea = document.getElementById("textarea");
  //si no existe un texto en el titulo
  if (!text.value || !textarea.value) {
    //modificacion atravez de placeholder
    text.placeholder = "este espacio no puede esatr vacio";
    text.className = "error";
    textarea.placeholder = "este espacio no puede esatr vacio";
    textarea.className = "error";
  }
  if (text.value && textarea.value) {
    addTarea(text.value, textarea.value);
  }
  // if (!textarea.value) {
  //   //modificacion atravez de placeholder
  //   textarea.placeholder = "este espacio no puede esatr vacio";
  //   textarea.className = "error";
  // } else {
  //   addTarea(null, textarea.value);
  // }
});

function addTarea(text, description) {
  var divTarea = document.createElement("div"); //creando un nuevo div cada para guardar una tasj
  divTarea.className = "Task";
  divTarea.setAttribute("id", "Task");
  console.log(divTarea);

  var father = document.getElementById("Task"); //es mi div que tiene cad atarea
  console.log(father);
  var title = document.createElement("h1");
  var description1 = document.createElement("p");
  var btn = document.createElement("button");

  btn.textContent = "Delete";
  btn.setAttribute("class", "delete");
  description1.textContent = description;
  title.textContent = text;

  father.parentElement.appendChild(divTarea);
  divTarea.appendChild(title);
  divTarea.appendChild(description1);
  divTarea.appendChild(btn);
}
