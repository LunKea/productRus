

const productContainer = document.querySelector(".product_grid");
const productId = 15345;

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((Response) => Response.json())
  .then((data) => {
    productContainer.innerHTML = `
    <img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="" />

      <div class="product_info">
        <h1>${data.productdisplayname}</h1>
        <h4>${data.articletype} - ${data.usagetype}</h4>

        <h3>Sizes</h3>
        <div class="size">
          <button class="small">S</button>
          <button class="medium">M</button>
          <button class="large">L</button>
        </div>

        <h3>DKK ${data.price},-</h3>
        <button>Add to basket</button>
      </div>
        `;
  });
