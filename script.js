 let add = document.getElementById("add-btn");
 let lists = document.querySelector(".lists");
 let deleteBtn = document.getElementById("delete-btn");
 let inputField = document.getElementById("title-input");

const api_url='https://610990bad71b6700176399bd.mockapi.io/todos'
 add.addEventListener('click', function() {

    let text=inputField.value
    fetch(api_url,{
    method:'POST',
    body:JSON.stringify({
        title:text,
       
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
    .then(response =>{
        if (response.ok) {
     alert("succsess");}
    return response.json();
    
    
    })
   .then(()=>location.reload())

    })


lists.addEventListener('click', (e)=> {
    let deleteBtnIsPressed=e.target.id="delete-btn"
let id=e.target.parentElement.dataset.id;
if(deleteBtnIsPressed){
fetch(`${api_url}/${id}`,{
method:'DELETE',
})
.then(response=>response.json())
.then(()=>location.reload())
}

})





 function getInf(){
    
 fetch(api_url)
 .then(response=>{
if(! response.ok){
throw Error("error");}
return response.json();
 })
 .then(data=>{
   
const html =data.map(todo=>{
 return `
<div class ="lists" data-id=${todo.id}>

 <p> Title : ${todo.title}</p>
 <button id="delete-btn">Delete</button>
 </div>`
 

}).join("");

document.querySelector(".lists").insertAdjacentHTML("afterbegin",html)
 })
// .catch(error=>{
//     console.log("error")
// })
 }

 getInf();

