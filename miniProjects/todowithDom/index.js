let btn = document.querySelector('button');
let ulList = document.querySelector('ul');

let taskInput = document.querySelector('input');

btn.addEventListener('click', () =>{
    let task = document.createElement('li');
    task.innerText = taskInput.value;
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("deleteBtn");
    task.appendChild(deleteBtn);
    ulList.appendChild(task);
    taskInput.value = "";

    
});


// ye wala method  kam nhi krega kyunki jb new item kam nhi krega kunki jo new task add krenge wo uska button delete nhi hoga  kyunki yha pr event bubling use krna pdega

// let delBtn = document.querySelectorAll('.deleteBtn');
// for(del of delBtn){
//     del.addEventListener('click', function(){
//         console.log("hello");
//         let per =  this.parentElement; // mai yhan pr del.parnetElement use ke skta hun (but wo kam nhi kr ha hai ) aur ye button ke parent kp call kr rhe hai .
//         per.remove();    
//     })
// }



//  yhan pr hm event bubling use krenege 

ulList.addEventListener("click", function(event){
    if(event.target.nodeName === "BUTTON"){        // event se hm target kreke nodename nikale rhe hai ise console.dir kreke dek skte ho 
        let per = event.target.parentElement;
        console.log(per);
         // isme  li ka parent aa jayega 
        per.remove();
        console.log("delted");
        
    }
    
})