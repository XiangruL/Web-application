var todoList = [];

var input = prompt("What would you like to do?");



while(input != "quit") {
    if (input == "list") {
        listTodos();
    } else if (input == "new") {
        addTodo();
    } else if (input == "delete") {
        deleteTodo();
    }
    input = prompt("What would you like to do?");
}

console.log("Successfully quit the app!");

function listTodos() {
    todoList.forEach(function(todo, i){
        console.log("*********");
        console.log(i + ": " + todo);
    });
}

function addTodo() {
    var newToDo = prompt("Enter a new todo");
    todoList.push(newToDo);
}

function deleteTodo() {
    var index = prompt("Enter index of todo to delete");
    todoList.splice(index, 1);
    console.log("Delete successfully");
}

function isUniform(arr) {
    var a = arr[0];
    var res = true;
    for (var i = 1; i < arr.length; i++) {
        if (a != arr[i]) {
            return false;
        }
    }
    return true;
}