let searchTerm = "";

let searchInput = document.getElementById("search");
searchInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    searchTerm = searchInput.value;
    console.log("Success!");
    console.log(searchInput.value);
    fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${searchTerm}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);

        document.getElementById("title").innerHTML = data.title;
        document.getElementById("extract").innerHTML = data.extract;
        document.getElementById("thumbnail").src = data.thumbnail.source;
        // thumbnailImage.src = data.thumbnail.source;
      });
  }
});

// "https://en.wikipedia.org/api/rest_v1/page/summary/china"
