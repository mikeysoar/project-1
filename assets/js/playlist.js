var userFomrEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#artistname");

var getMusicVideo = function(search) { 
    // format the itunes api
    var apiUrl = "https://itunes.apple.com/search?term=" + search; 

    // fetch information from the itunes website
    fetch(apiUrl).then(function(response){
        response.json().then(function(data) {
            console.log(data);
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

userFomrEl.addEventListener("submit", artistSubmitHandler);