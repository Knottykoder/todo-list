const inputtask = document.querySelector("#inputtask");
const addbtn = document.querySelector("#addbtn");
const form = document.querySelector(".form");
const todolist = document.querySelector(".todolist");
const clear = document.querySelector(".clear");
const button = document.querySelector("#button");

button.addEventListener("click", (event) =>{
    event.preventDefault();
    if(inputtask.value == ""){
        alert("please add some text");
    }else{
        const newtask = createNewItem(inputtask.value);
        todolist.appendChild(newtask);
        inputtask.value="";
        inputtask.focus();
        clear.classList.remove("d-none");
    }
    clear.addEventListener("click", function(){
        todolist.innerHTML = "";
    });
});
function createNewItem(inputvalue){
    const task = document.createElement("li");
    const span = document.createElement("span");
    const delbtn = document.createElement("button");
    const editbtn = document.createElement("button");
    span.textContent = inputvalue;
    delbtn.textContent = "Delete";
    editbtn.textContent = "Edit";
    task.appendChild(span);
    task.appendChild(delbtn);
    task.appendChild(editbtn);

    delbtn.addEventListener("click", function(){
        task.parentNode.removeChild(task);
    });

    editbtn.addEventListener("click", function(){
        span.contentEditable = true;
        span.focus();
    });

    return task;
}