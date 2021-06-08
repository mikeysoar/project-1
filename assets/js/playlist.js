var musicSelector = document.querySelector("music-selector");
var formLabel = document.querySelector("#form-label");

// var formSubmitHandler = function (event) {
//     event.preventDefault();
//     console.log(event);

//     // get value from input element
//     var username = nameInputEl.value.trim();

//     if (username) {
//         getUserRepos(username);

//         // clear oldcontent
//         repoContainerEl.textContent = "";
//         nameInputEl.value = "";
//     } else {
//         alert("Please select a Feeling!");
//     }
// };

var buttonClickHnadler

var getMusicRepos = function () {
    // format the musicovery api url
    var musicRepos = "https//musicovery.com/api/V6/search.php" + "" + "/repos";

    // make a request to the url
    fetch(musicRepos)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    displayRepose();
                });
            } else {
                alert("Error: Try another mood");
            }
        });
};