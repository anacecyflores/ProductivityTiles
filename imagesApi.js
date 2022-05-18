const numItemsToGenerate = 1;

function renderItem() {
  fetch(`https://source.unsplash.com/1600x900/?beach`).then((response) => {
    let item = document.createElement("div");
    item.classList.add("item");
    item.innerHTML = `
      <img class="beach-image" src="${response.url}" alt="beach image"/>
    `;
    document.body.appendChild(item);
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?beach')";
    let photo = document.querySelector("#photo");
    photo.textContent = response.content;
  });
}
for (let i = 0; i < numItemsToGenerate; i++) {
  renderItem();
}
