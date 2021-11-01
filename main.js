const searchByNameUrl=" https://api.tvmaze.com/search/shows?q="
const searchByIdUrl="https://api.tvmaze.com/shows/"

async function getApi(api,search){
    try{
        lodgingGif(myDiv)
       return await fetch(api+search) 
       .then(res=>res.json())
    }
    catch(error){
        return error
    }
    finally{
        stopLodgingGif(myDiv)
    }
}




function lodgingGif(someDiv){
    someDiv.innerHTML=`<img src="processing.gif" id="gif">`
}


function stopLodgingGif(){
    gif.style.display="none";
}





searchInput.oninput=()=>{
    switch (mySelect.value) {
        case "id":
            getApi(searchByIdUrl,searchInput.value)
            .then((res)=>{objDisplayView(myDiv,res)})
            break;
            case "nameOfShow":
                getApi(searchByNameUrl,searchInput.value)
                .then((res)=>{displayView(myDiv,res)})
                break;
        
        default:
            break;
    }

}




function displayView(someDiv,someArray){
    for(let item of someArray){
       if(item.show.image){
        someDiv.innerHTML+=
        `<article class="card"><img src="${item.show.image.medium}">
        <P><span>name:</span> ${item.show.name}</p>
        <p><span>category:</span>${item.show.genres[0]}</p>
        <p><span>description:</span>${item.show.summary} </p>
        </article>'`
    }else someDiv.innerHTML+=
    `<article class="card" ><img src="notAvailable.jpg">
    <P><span>name:</span> ${item.show.name}</p>
    <p><span>category:</span>${item.show.genres[0]}</p>
    <p><span>description:</span>${item.show.summary} </p>
</article>'`
}

};


function objDisplayView(someDiv,ojb){
    console.log(ojb);
    if(ojb.image){
    someDiv.innerHTML+=
    `<article class="card" ><img src="${ojb.image.medium}">
    <P><span> name:</span>${ojb.name}</p> 
    <p><span>category:</span>${ojb.genres[0]}</p>
    <p><span>description:</span> ${ojb.summary}</p>
    </article>`
}else{
     someDiv.innerHTML+=
    `<article class="card" ><img src="notAvailable.jpg">
    <P><span> name:</span>${ojb.name}</p> 
    <p><span>category:</span>${ojb.genres[0]}</p>
    <p><span>description: ${ojb.summary}</p>
    </article>`

}
}

