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
    .map((product) => {
      return `
      <div class="productlist_subgrid"  ${product.discount ? "sale" : ""} ${
        product.soldout ? "sold_out" : ""
      }">
        <a href="produkt.html?id=${product.id}">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${
            product.id
          }.webp" alt="${product.productdisplayname}" />
        </a>
          <h3>${product.productdisplayname}</h3>
        <p>${product.articletype} - ${product.usagetype}</p>
        
        <p>DKK ${product.price},-</p>
        
        ${
          product.discount != null
            ? `<div class="sale"> 
          <p> - ${product.discount}% </p>
        </div>`
            : ""
        }

        ${
          product.soldout === 1
            ? `<div class="sold_out"> 
          <p>Sold Out</p>
        </div>`
            : ""
        }
      </div>
        
      </div>`;
    })
    .join("");
  listContainer.innerHTML = markup;
}
