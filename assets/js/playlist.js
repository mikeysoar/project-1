var storyContainerEl = document.querySelector("#story-container");
var storySearchTerm = document.querySelector("#stories-search-term");
var storyFormEl = document.querySelector("#user-card");
var numberInputEl = document.querySelector("#stories");
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

var genreMusicStories = function(search) {
    var genreUrl = "https://binaryjazz.us/wp-json/genrenator/v1/story/" + search + "/";
    
    fetch(genreUrl).then(function(response) {
        response.json().then(function(data) {
            displayStories(data, search);
        });
    });
}

var storySubmitHandler = function(event) {
    event.preventDefault();
    // get value from input element
    var genreName = numberInputEl.value.trim();

    if (genreName) {
        genreMusicStories(genreName);
        numberInputEl.value = "";
    } else {
        alert("Please enter a number to receive music story")
    }
    console.log(event);
};

var displayStories = function(search, searchTerm) {
    storyContainerEl.textContent = "";
    storySearchTerm.textContent = searchTerm;

<<<<<<< HEAD
    lyricContainerEl.textContent = "";
    lyricSearchTerm.textContent = searchTerm;
    
    for (var i = 0; i < search.length; i++) {
        var lyricName = search[i].lyrics.valueOf.name;
=======
    for (var i = 0; i < search.length; i++) {
        var storyName = search[i];
>>>>>>> feature/2fetch

        var storyEl = document.createElement("div");
        storyEl.classList = "list-item flex-row justify-space-between align-center";

        var storyBro = document.createElement("span");
        storyBro.textContent = storyName;

        // append to container
        storyEl.appendChild(storyBro);

        storyContainerEl.appendChild(storyEl);
    }

    console.log(search);
    console.log(searchTerm);
}

userFomrEl.addEventListener("submit", artistSubmitHandler);
storyFormEl.addEventListener("submit", storySubmitHandler);
