let newItem = document.createElement("li")

newItem.innerText="item 5 " //dodavanje contenta innerHtml


let newText= document.createTextNode("item 5")
newItem.appendChild(newText);


let list = document.getElementById("items")


list.appendChild(newItem) //element koji zelimo da dodamo 
console.log(list.classList) // vraca sve klase 

newItem.classList.add ="list-group-item " //dodavanje klase 
list.querySelector("li").classList.remove("list-group-item") //prvi element koji mecuje ovaj selektro ali da je child ovog elementa 

let secondItem = list.children[1]
console.log(secondItem)
list.insertBefore(newItem, secondItem)//dodati novi item prije secondItem 


list.innerHTML + = "<li class =item>  item 5 </li>"

list.remove();

list.removeChild(newItem)


