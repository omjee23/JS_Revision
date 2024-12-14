let divbar = document.querySelector('div');
let ul = document.querySelector('ul');
let lis = document.querySelectorAll('li');

// divbar.addEventListener('click', function(){
//     console.log("div was clicked");
    
// })
// ul.addEventListener('click', function(){
//     console.log("ul was clicked");
    
// })
//  for(li of lis ){
//     li.addEventListener('click', function(){
//         console.log("li was clicked");
        
//     })
//  }

 // ye upr wale code mai event bubbling ho rhi hai
//   jais hm agr hm div pr click krenge to print hog div was clicked but jaise hm
// ul pr click krennge to sath ul was clicked but sath div was clicked also print ese hi 
// jb hm li pr clicked krenge to print li was clicked but sath hi ul was clicked and div was clicked print 
// hoga to isko rokene ke liye event.stopPorgation use krte hai


divbar.addEventListener('click', function(){
    console.log("div was clicked");
    
})
ul.addEventListener('click', function(event){
    event.stopPropagation()
    console.log("ul was clicked");
    
})
 for(li of lis ){
    li.addEventListener('click', function(event){
        event.stopPropagation()
        console.log("li was clicked");
        
    })
 }