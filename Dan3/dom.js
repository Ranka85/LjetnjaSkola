console.log(document)
document.title="novi title"

// console.log(document.title);
// console.log(document.body);
// console.dir(document.body);

let list = document.getElementById("items");
console.log(list)

let items =document.querySelectorAll("#items li");
let items2 = list.getElementsByClassName("list-group-item")
console.log(items[0]);

for (item of items){ //mijenjamo atribut

    // date-name-> dateName
    item.setAttribute("style","background-color :blue");
    item.style.color= "white";
  //  console.log(item)
}

//uklanjanje atributa 

items[0].removeAttribute("style");
items[0].setAttribute 

list.innerHTML = "<p> Primjer</p>"; //delete all and add new
list.innerHTML += "<p>dodaj</p>"; //only add new one 


let header = document.getElementById("header-title")

console.log(header.innerHTML);

console.log(header.innerText) //samo text node u okviru elementa 

header.innerText="novi naslov "


document.getElementsByClassName("ntm-dark")
document.getElementsByClassName("btn-dark")[0].setAttribute("disabled", true)
document.getElementsByClassName("btn-dark")[0].value = "Prihvati"

let form = document.getElementsByTagName("form")[0]; //prvi element iz form 

console.log(form.firstChild)
console.log(form.firstElementChild)

form.children //vraca HTML kolekcciju koji su potmoci njegovi, samo elemente 


console.log(form.parentElement)
console.log(form.previousElementSibling)
