
const colorButton = document.querySelectorAll('.button');
const body = document.querySelector('main');

const color = ["green", "yellow", "red","blue"]

colorButton.forEach(function(ele){
    ele.addEventListener('click',function(e){
        console.log(e.target.id)
        color.forEach(function(color){
            if(e.target.id === color){
                body.style.backgroundColor = color;
            }
        });
    });
})

