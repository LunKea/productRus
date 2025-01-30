const productContainer = document.querySelector(".productContainer");
const productId = 1533;
fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    productContainer.innerHTML = `
      <section class="single_view">
        <div class="single_view_product">
        <figure>
          <img
          src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp"
            alt="product"
          />
        </div>
        </figure>

        <div class="single_view_info">
          <div>
          <p class="articleType brand">${data.brandname}</p>
            <p class="articleType">${data.productdisplayname}</p>
            <p class="productPrice"><span class="bold">Price:</span> ${data.price} DKK</p>
            <p class="productPrice">${data.discount}</p>
          </div>
          <div class="size">
            <p>Size</p>
            <div class="dropdown_size"></div>
            <p class="productPrice">${data.parsed}</p>
          </div>
          <div class="cart">
            <p>CART</p>
          </div>
        </div>

      </section>
    `;
  });