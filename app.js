//selectors
const todoButton = document.querySelector(".todo_button");
const todoInput = document.querySelector(".todo_input");
const todoList = document.querySelector(".todo_list");
const filterOption = document.querySelector('.filter_todos');


// Event Listeners
todoButton.addEventListener('click', addToDo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);


// Functions

function addToDo(event) {
        // prevents form from submitting
    event.preventDefault();
        //todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
        //creat li for todo item inside of todoDiv
    const itemTodo = document.createElement('li');
    itemTodo.classList.add('todo_item');
        // value inside of the itemTodo
    itemTodo.innerText = todoInput.value;
        //place the itemTodo inside the todoDiv
    todoDiv.appendChild(itemTodo);

    
    
    //Buttons
        // checked button
    const checkedButton = document.createElement('button');
    checkedButton.innerHTML = '<i class="fas fa-check"></i>';
    checkedButton.classList.add('checked-button');
        // place it inside the todoDiv
    todoDiv.appendChild(checkedButton);

        // delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('delete-button');
        //place it inside todoDiv
    todoDiv.appendChild(deleteButton);

    //now place todoDiv inside your html page inside todoList
    todoList.appendChild(todoDiv);
    //clear input field after submit
    todoInput.value = "";
};

function deleteCheck(event) {
    //target when clicked(event) item to delete
    const itemToCompleteOrDelete = event.target;
    //what to delete when its clicked
    if(itemToCompleteOrDelete.classList[0] === 'delete-button'){
        const toDelete = itemToCompleteOrDelete.parentElement;
        // animatetion when deleting
        toDelete.classList.add('fall');
        toDelete.addEventListener('transitionend',  () => {
            toDelete.remove();

        })
    } 
    
    if(itemToCompleteOrDelete.classList[0] === 'checked-button'){
        const toComplete = itemToCompleteOrDelete.parentElement;
        toComplete.classList.toggle('completed');
    }
};


function filterTodo(event) {
    const todos = todoList.childNodes
    todos.forEach(function(todo) {
        switch(event.target.value) {
            case "all":
                todo.style.display = "flex";
                break;

            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;

            case "uncompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display = "flex";     
                }else{
                    todo.style.display = "none";
                }
                break;
        }
    })

}

// save local todos



