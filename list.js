const myCategori = new URLSearchParams(window.location.search).get("category");
console.log("produktliste loader... med categori:", myCategori);

// Update the <h2> element with the category name (fra CHATGPT)
document.querySelector("h2").textContent = myCategori;

const listContainer = document.querySelector(".productlist_grid");

fetch(`https://kea-alt-del.dk/t7/api/products?category=${myCategori}`)
  .then((Response) => Response.json())
  .then((data) => showList(data));

function showList(products) {
  console.log(products);

  const markup = products
    .map(
      (product) => `
      <div class="productlist_subgrid">
        <a href="produkt.html">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}" />
        </a>
          <h3>${product.productdisplayname}</h3>
        <p>${product.articletype} - ${product.usagetype}</p>
        <p>DKK ${product.price},-</p>
      </div>`
    )
    .join("");
  listContainer.innerHTML = markup;
}
