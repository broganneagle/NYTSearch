var apiKey = "nwp9hOhAs71BmaQWzGvIPQtygSo8JJtH";
var search = "";
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?" + search + "&api-key=" + apiKey;


$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    var articles = (response.response.docs);
    console.log(response);
    console.log(articles);

    console.log(articles[0].headline.main);
    console.log(articles[0].abstract);

});