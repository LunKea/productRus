fetch(`https://kea-alt-del.dk/t7/api/categories`)
  .then((Response) => Response.json())
  .then(showCategori);

function showCategori(data) {
  console.log("mine data er:", data);

  const markup = data
    .map(
      (element) => `
  <a href="produktliste.html?category=${element.category}">${element.category} 
  </a>`
  
    )
    .join("");
  document.querySelector("container").innerHTML = markup;
}

// <img src="https://kea-alt-del.dk/t7/images/webp/640/15214.webp" alt="" />