

let list = document.getElementById("items");


function addItem(event){
    event.preventDefault();
    let newItemName = document.getElementsByClassName("ItemName")[0].value;
    console.log(newItemName);
    if (newItemName){
        document.getElementById("items").innerHTML 
        += "<li class='list-group-item'>" + newItemName +  '<button class="button-item"></button>' + "</li>"; 
    }
    
}
document.querySelector("input[type='submit']").addEventListener("click", addItem);


const itemsList = document.querySelectorAll(".button-item") ;

for (item of itemsList){
    item.addEventListener("click", function(event){
        event.target.parentElement.remove();
    })
}

