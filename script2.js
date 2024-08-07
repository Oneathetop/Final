document.addEventListener("DOMContentLoaded", () => {
  const cartItems = [];
  const cartTableBody = document.getElementById("cart-items");
  const totalPriceElement = document.getElementById("total-price");

  document.getElementById("add-to-cart").addEventListener("click", () => {
      const items = document.querySelectorAll("input[type='number']");
      let totalPrice = 0;

      cartTableBody.innerHTML = "";

      items.forEach(item => {
          const quantity = parseFloat(item.value) || 0;
          if (quantity > 0) {
              const itemName = item.name.replace("Qty", "");
              const price = getItemPrice(itemName);
              totalPrice += price * quantity;

              const row = document.createElement("tr");
              row.innerHTML = `<td>${capitalize(itemName)}</td><td>${quantity}</td><td>$${(price * quantity).toFixed(2)}</td>`;
              cartTableBody.appendChild(row);
          }
      });

      totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
  });

  document.getElementById("buy-now").addEventListener("click", () => {
      window.location.href = "order-confirmation.html";
  });

  document.getElementById("add-to-favourites").addEventListener("click", () => {
      const items = document.querySelectorAll("input[type='number']");
      const favourites = {};

      items.forEach(item => {
          const quantity = parseFloat(item.value) || 0;
          if (quantity > 0) {
              favourites[item.name] = quantity;
          }
      });

      localStorage.setItem("favourites", JSON.stringify(favourites));
      alert("Favourites saved!");
  });

  document.getElementById("apply-favourites").addEventListener("click", () => {
      const favourites = JSON.parse(localStorage.getItem("favourites"));

      if (favourites) {
          Object.keys(favourites).forEach(key => {
              document.querySelector(`input[name='${key}']`).value = favourites[key];
          });
          alert("Favourites applied!");
      } else {
          alert("No favourites found!");
      }
  });

//Functions

  function getItemPrice(itemName) {
      const prices = {
          apple: 3, berry: 5, orange: 7, melon: 9, pear: 10, grape: 5,
          carrot: 2, beet: 6, brinjal: 12, pumpkin: 10, pepper: 9, radish: 20,
          milk: 1.5, cheese: 15, powder: 10, margarene: 25, cream: 35, butter: 5,
          chicken: 75, fish: 85, squid: 450, tuna: 150, salmon: 100, crab: 250,
          flour: 130, yeast: 150, sugar: 200, salt: 11, colour: 7, soda: 10
      };
      return prices[itemName] || 0;
  }

  function capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
  }
});

