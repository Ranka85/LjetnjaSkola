
(function () {
    fetch("https://rickandmortyapi.com/api/character")
    .then((response) => {
        return response.json();
    })
    .then((result) => {
        let character = result.results;
        console.log(character);
        let innerHtml = "";
       character.forEach((item) => {
        innerHtml += ` <div class="card">
          <img src=${item.image} alt="Avatar" style="width:100%">
          <div class="container">
            <h4><b>${item.name}</b></h4> 
            <p>${item.species}</p>
        </div>
        `;
         });
        document.getElementById("container").innerHTML = innerHtml;
    });
})();

           