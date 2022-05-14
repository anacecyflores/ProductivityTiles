// API for Random Quotes- IT WORKS!
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
    "X-RapidAPI-Key": "ad93e94650msh239cfa1a954f0bep116be7jsn39bb48d4e937",
  },
};

fetch("https://quotes15.p.rapidapi.com/quotes/random/", options)
  .then((response) => response.json())
  .then((response) => {
    let quote = document.querySelector("#quote");
    // let author = document.querySelector("#author");
    console.log(quote.textContent);
    console.log(response);
    quote.textContent = response.content;
    // author.textContent
  });
