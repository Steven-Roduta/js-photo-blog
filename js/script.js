
//MAIN 
//Effetuo richiesta API
axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6") 
    .then(function(response){
        //Stampo la risposta in console
        console.log("response.data", response.data) 
        //Vado a ciclare per ogni elemento dell'array 
        response.data.forEach((element,index) => {
            //salvo l'url in due constanti
            const nameTitle = element.title;
           // const nameUrl = element.url; 
           // seleziono la card con l'indice corrispondente
            const card = document.getElementById(`card-${index + 1}`);
            //controllo se la card esiste e seleziono il titolo della card
            if(card) {
                const cardTitle = card.querySelector('.card-title').textContent = nameTitle

                //const cardImage = card.querySelector('.card-img-top').src = nameUrl
            }          
        })
    }) 

//gestione di errori
.catch(error => {
    console.error("errore chiamata", error)
}) 
