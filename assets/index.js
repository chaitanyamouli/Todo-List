let addItemBtn = document.getElementById("add-item-btn");
let todoItemNameElement = document.getElementById("todoItemName");
let todoList = document.getElementById("todo-list");

function displayUpdatedItems(){
    let itemsFromLocalStorage = JSON.parse(localStorage.getItem("todoItems"))
    if(itemsFromLocalStorage !=null){
        todoList.innerHTML=""
        itemsFromLocalStorage.map((item,i)=>{
            todoList.innerHTML += `<li class="todo-item">${item} 
                <button class="delete-btn" onclick="deleteItem(${i})">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </li>`;
        })
    }
}

displayUpdatedItems();

addItemBtn.addEventListener("click",function(){
    let itemsFromLocalStorage =JSON.parse(localStorage.getItem("todoItems"))
    if(itemsFromLocalStorage==null){
        let todoItems=[]
        todoItems.push(todoItemNameElement.value)
        localStorage.setItem("todoItems",JSON.stringify(todoItems))
        displayUpdatedItems();
    }else{
        let itemsFromLocalStorage = JSON.parse(localStorage.getItem("todoItems"))
        itemsFromLocalStorage.push(todoItemNameElement.value)
        localStorage.setItem("todoItems",JSON.stringify(itemsFromLocalStorage));
        displayUpdatedItems();
    }
})

function deleteItem(index){
    console.log(index);
    let itemsFromLocalStorage=JSON.parse(localStorage.getItem("todoItems"))
    itemsFromLocalStorage.splice(index,1);
    localStorage.setItem("todoItems",JSON.stringify(itemsFromLocalStorage))
    displayUpdatedItems()
}