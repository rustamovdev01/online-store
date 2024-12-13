let list = document.querySelector('.product-list');
let basket_json = [
  {
    'img': 'ice-cream/01.png',
    'name': 'Zolotoy',
    'price': 15000,
    'count': 3,
    'total price': 45000,
  },
  {
    'img': 'chocolate/04.png',
    'name': 'Kit Kat',
    'price': 12000,
    'count': 1,
    'total price': 12000,
  },
  {
    'img': 'drink/03.png',
    'name': 'Coca-Cola',
    'price': 14000,
    'count': 3,
    'total price': 42000,
  },
  {
    'img': 'chocolate/13.png',
    'name': 'Alpen Gold',
    'price': 13000,
    'count': 3,
    'total price': 39000,
  },
];

// Generate product elements
for (let i = 0; i < basket_json.length; i++) {
  let productAbout = document.createElement('div');
  productAbout.classList.add('product');
  productAbout.innerHTML = `
    <img src="../media/${basket_json[i]['img']}" class="product-img">
    <p class='product-name'>name: ${basket_json[i]['name']}</p>
    <p class='product-price'>price: ${basket_json[i]['price']}</p>
    <p class='product-count'>count: ${basket_json[i]['count']}</p>
    <p class='total-price'>total price: ${basket_json[i]['total price']}</p>
    <div class='minus-plus'>
      <button class="minus">-</button>
      <button class="delete">delete</button>
    </div>
  `;

  list.appendChild(productAbout);
}

// Decrease count functionality
let minus = document.querySelectorAll('.minus');
minus.forEach((n, index) => {
  n.onclick = () => {
    let item = basket_json[index];
    if (item['count'] > 1) {
      item['count'] -= 1;
      item['total price'] -= item['price'];

      // Update displayed count and total price
      let count_list = document.querySelectorAll('.product-count');
      count_list[index].textContent = `count: ${item['count']}`;
      let total_price = document.querySelectorAll('.total-price');
      total_price[index].textContent = `total price: ${item['total price']}`;
    }
  };
});

// Delete product functionality
let remove = document.querySelectorAll('.delete');
remove.forEach((n, index) => {
  n.onclick = () => {
    // Find the specific product element and hide/remove it
    let productElements = document.querySelectorAll('.product');
    productElements[index].style.display = 'none';

    // Optionally remove the item from basket_json
    basket_json.splice(index, 1); // Remove the item from the array
  };
});
