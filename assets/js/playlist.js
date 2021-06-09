var artistContainerEl = document.querySelector("#artist-container");
var artistSearchTerm = document.querySelector("#artist-search-term");
var userFomrEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#artistname");

var getMusicVideo = function(search) { 
    // format the itunes api
    var apiUrl = "https://itunes.apple.com/search?term=" + search; 

    // fetch information from the itunes website
    fetch(apiUrl).then(function(response){
        response.json().then(function(data) {
            displayArtist(data, search)
        });
    });
};

var artistSubmitHandler = function(event) {
    event.preventDefault();
    // get value for artist name
    var artist = nameInputEl.value.trim();

    if (artist) {
        getMusicVideo(artist);
        nameInputEl.value = "";
    } else {
        alert("Enter a name of an artist");
    }
    console.log(event);
};

var displayArtist = function(search, searchTerm) {
    // clear old artist information
    artistContainerEl.textContent = "";
    artistSearchTerm.textContent = searchTerm;

    for (var i = 0; i < search.results.length; i++) {
        var searchName = search.results[i].kind + "/" + search.results[i].collectionName;

        var searchEl = document.createElement("div")
        searchEl.classList = "list-item flex-row justify-space-between align-center";

        var titleEl = document.createElement("span");
        titleEl.textContent = searchName;

        searchEl.appendChild(titleEl);

        artistContainerEl.appendChild(searchEl);
    }
    console.log(search);
    console.log(searchTerm);
}

userFomrEl.addEventListener("submit", artistSubmitHandler);