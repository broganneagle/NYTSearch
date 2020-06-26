apiKey = "nwp9hOhAs71BmaQWzGvIPQtygSo8JJtH";
queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=" + apiKey;

$.ajax({
    url: queryURL
    method: "GET"
}.then(function(response) {
    console.log(response);
})
});