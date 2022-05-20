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
    let author = document.querySelector("#author");
    console.log(quote.textContent);
    console.log(response);
    quote.textContent = response.content;
    author.textContent = response.originator.name;
  });

  var container = document.querySelector(".display");

container.addEventListener("click", function(event) {
  var element = event.target;

  if (element.matches(".box")) {
    var state = element.getAttribute("data-state");

    // Use an if statement to conditionally render the number on the card
    if (state === "hidden") {
      // If the card is clicked while the state is "hidden", we set .textContent to the number 
      element.textContent = "click to hide";
      // Using the dataset property, we change the state to visible because the user can now see the number
      element.dataset.state = "visible";
   
    } else {
      // 'Hide' the number by setting .textContent to an empty string
      element.textContent= "";
      // Use .setAttribute() method
      element.setAttribute("data-state", "hidden")
     
    }  
  }
  
});