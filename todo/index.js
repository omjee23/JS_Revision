let todo = [];

let req = prompt("please enter your choice!")
// console.log(req);
 

while(true){
    if(req == "quit"){
        console.log("Quiting the app ");
        break; 
    }

    if(req == "list"){
        console.log("-----------------------------------");
        
        for(item of todo){
            console.log(item);   
        }
        console.log("-----------------------------------");
        
    }else if(req == "add"){
        let add = prompt("Add a new todo!")
        todo.push(add);
        console.log("task added");
        
    }else if(req == "delete"){
        let indx = prompt("which index todo you want to delete!")
        todo.splice(indx, 1);
        console.log("task deleted");
        
    }
    req = prompt("please enter your choice! nmik ")
}   