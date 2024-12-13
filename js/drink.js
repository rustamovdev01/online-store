let drink_json = {
	1: { 'img': '../media/drink/01.png', 'name': 'Coca-Cola', 'price': 8000 },
	2: { 'img': '../media/drink/02.png', 'name': 'Pepsi', 'price': 7500 },
	3: { 'img': '../media/drink/03.png', 'name': 'Sprite', 'price': 7000 },
	4: { 'img': '../media/drink/04.png', 'name': 'Fanta', 'price': 7000 },
	5: { 'img': '../media/drink/05.png', 'name': '7UP', 'price': 6500 },
	6: { 'img': '../media/drink/06.png', 'name': 'Mountain Dew', 'price': 7500 },
	7: { 'img': '../media/drink/07.png', 'name': 'Dr Pepper', 'price': 8500 },
	8: { 'img': '../media/drink/08.png', 'name': 'Mirinda', 'price': 7000 },
	9: { 'img': '../media/drink/09.png', 'name': 'Lipton Ice Tea', 'price': 6500 },
	10: { 'img': '../media/drink/10.png', 'name': 'Nestea', 'price': 7000 },
	11: { 'img': '../media/drink/11.png', 'name': 'Arizona Iced Tea', 'price': 9000 },
	12: { 'img': '../media/drink/12.png', 'name': 'Red Bull', 'price': 12000 },
	13: { 'img': '../media/drink/13.png', 'name': 'Monster Energy', 'price': 11000 },
	14: { 'img': '../media/drink/14.png', 'name': 'Powerade', 'price': 8000 },
	15: { 'img': '../media/drink/15.png', 'name': 'Gatorade', 'price': 8500 },
	16: { 'img': '../media/drink/16.png', 'name': 'Ting', 'price': 7500 },
	17: { 'img': '../media/drink/17.png', 'name': 'Fizzy Lemonade', 'price': 6500 },
	18: { 'img': '../media/drink/18.png', 'name': 'Schweppes', 'price': 7000 },
	19: { 'img': '../media/drink/19.png', 'name': 'Appletiser', 'price': 9000 },
	20: { 'img': '../media/drink/20.png', 'name': 'San Pellegrino', 'price': 9500 }
};

let product = document.querySelector('.product')

for (let key in drink_json) {
	let drink = drink_json[key];

	let productItem = document.createElement('div');
	productItem.classList.add('product-item');
	productItem.innerHTML = `
			<img src="${drink['img']}" class="product-img">
			<div class="product-data">
					<p class="product-name">Name: ${drink['name']}</p>
					<p class="product-price">Price: ${drink['price']}</p>
					<div class="product-control">
							<button class="minus" disabled>-</button>
							<input type="text" class="count" value="0">
							<button class="plus">+</button>
					</div>
			</div>
	`;

	product.appendChild(productItem);

	let plus = productItem.querySelector('.plus');
	let minus = productItem.querySelector('.minus');
	let countInput = productItem.querySelector('.count');

	plus.addEventListener('click', () => {
			let currentCount = parseInt(countInput.value) || 0;
			countInput.value = currentCount + 1;
			minus.disabled = false;
	});

	minus.addEventListener('click', () => {
			let currentCount = parseInt(countInput.value) || 0;
			if (currentCount > 0) {
					countInput.value = currentCount - 1;
			}
			if (parseInt(countInput.value) === 0) {
					minus.disabled = true;
			}
	});
}
