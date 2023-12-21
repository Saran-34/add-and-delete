var addbtn =document.getElementById("btn")
var popcon=document.getElementById("pop-con")
var popsub=document.getElementById("pop-sub")

var cancel = document.getElementById("cancel")
var add=document.getElementById("add")

var book=document.getElementById("book")
var author=document.getElementById("author")
var describe=document.getElementById("discribe")
var container=document.querySelector(".container")

addbtn.addEventListener("click",function(){
   
    popsub.style.display = "block";
    popcon.style.visibility = "visible";

})
cancel.addEventListener("click",function(event){
    event.preventDefault()

    popsub.style.display = "none";
    popcon.style.visibility = "hidden";
})
add.addEventListener("click", function(event){
    event.preventDefault()
    
    var div=document.createElement("div")
    div.classList.add('sub-con' );
    div.innerHTML=`<h1>${book.value}</h1> <h3>${author.value}</h3> <p>${describe.value}</p>  <button onclick="del()">Delete</button>`
      container.append(div)
    
      popsub.style.display = "none";
      popcon.style.visibility = "hidden";
      book.value= ""
      author.value =""
      describe.value=""
})
function del(){
    event.target.parentElement.remove()
}