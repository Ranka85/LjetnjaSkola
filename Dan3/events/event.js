let btn = document.getElementById("button")


function buttonClick(event){ //event objekat nosi informacije o samom eventu 
    // alert("hello")
    document.getElementById("makin-header").style.display="none";
    document.getElementById("main-header").innerText="naslov"

} 
btn.addEventListener("click", buttonClick);

btn.removeEventListener("click", buttonClick)

let select = document.getElementById("select")[0];
let items = document.querySelectorAll("li");



let cureentItem;


select.addEventListener("change", function(event){
    if (cureentItem){
        cureentItem.removeAttribute("style")
    }
    for(item of items){
        item.removeAttribute("style")
    }
    items[event.target.value-1].style.backgroundColor="blue";
    cureentItem = items[event.target.value-1];

   // console.log(event.target.value)
})





function addItem(event){
    event.preventDefault(); //da nma submit ne refresuje odmah 

    let inputText= document.getElementById("itemNmae").value //uzimamo vrijednost iz input polja
    if (inputText){ //ako input nije prazan
    document.getElementById("items").innerHTML +=  "< class = 'list-goyup-items '>" +inputText +"</li> "//dodajemo na kraj liste 
    }


}
Document.querySelector("input[type='submit']").addEventListener("click", additem);



document.addEventListener(
    "keydown"
    function(event){
        console.log(event)
    },
    true,
);