let counter=0;
let counter_=0;
function add() {
  counter += 1;
}
function add_() {
  counter_ += 1;
}
function del() {
  counter -= 1;
}
function del_() {
  counter_ -= 1;
}
      
document.querySelector("#input").addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
      const input = document.querySelector("#input");
      addItem(input.value);
      add();
      document.getElementById("counter").innerHTML="кол-во заданий " + ": " + counter;
    }
      
  });
  
  document.querySelector("#additem").addEventListener("click", () => {
    const input = document.querySelector("#input");
    addItem(input.value);
    add();
    document.getElementById("counter").innerHTML="кол-во заданий " + ": " + counter;
  });
  
  addItem = (input) => {
    const item = document.createElement("div");
    const div = document.createElement("div");
    const checkIcon = document.createElement("i");
    const deleteIcon = document.createElement("i");
    const text = document.createElement("p");
  
    item.className = "item";
    text.textContent = input;
    checkIcon.className = "fa-solid fa-circle-check";
    checkIcon.style.color = "lightgray";
    checkIcon.addEventListener("click", () => {
      checkIcon.style.color = "limegreen";
      add_();
      document.getElementById("counter_").innerHTML="кол-во выполненых заданий " + ": " + counter_;
    })
    div.appendChild(checkIcon);
    deleteIcon.className = "fa-solid fa-trash-can";
    deleteIcon.style.color = "black";
    deleteIcon.addEventListener("mouseover", () => {
      deleteIcon.style.color = "red";
    })
    deleteIcon.addEventListener("mouseout", () => {
      deleteIcon.style.color = "black";
    })
    deleteIcon.addEventListener("click", () => {
      item.remove();
      del();
      if(counter_!=0){
      del_();}
      document.getElementById("counter_").innerHTML="кол-во выполненых заданий " + ": " + counter_;
      document.getElementById("counter").innerHTML="кол-во  заданий " + ": " + counter;
      if(counter==0){document.getElementById("counter_").innerHTML=" "};

    })
    div.appendChild(deleteIcon);
  
    item.appendChild(text);
    item.appendChild(div);
  
    document.querySelector("#todolist").appendChild(item);
    document.querySelector("#input").value = "";
  }