const productId = new URLSearchParams(window.location.search).get("id");

const productContainer = document.querySelector(".product_grid");

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((Response) => Response.json())
  .then((data) => {
    productContainer.innerHTML = `
    <img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="" />

      <div class="product_info"> 
      
        <h1>${data.productdisplayname}</h1>
        <h4>${data.articletype} - ${data.usagetype}</h4>

        <div>
        ${
          data.soldout === 1
            ? `<div class="sold_out"> 
                <h3>Sold Out</h3>
              </div>`
            : ""
        }

        <!-- Show original price only if there is NO discount -->
        ${
          data.discount
            ? "" // Hide the original price if a discount exists
            : `<h3>${data.price} DKK</h3>`
        }

        <!-- Show discount percentage and discounted price if a discount exists -->
        ${
          data.discount
            ? `<div class="sale"> 
                <h3> DISCOUNT: ${data.discount}% </h3>
              </div>
              <h3>DISCOUNTED PRICE: ${Math.ceil(
                data.price - data.price * (data.discount / 100)
              )} DKK</h3>`
            : ""
        }
        </div>

        <button>Add to basket</button>
      </div>
        `;
  });
