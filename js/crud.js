let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price, image) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, price, image, quantity: 1 });
    }
    updateCart();
    alert('Игра добавлена в корзину!');
}

function updateCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    const cartContainer = document.getElementById('cart');
    cartContainer.innerHTML = '';
    let totalPrice = 0;

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="item-details">
                <h2>${item.name}</h2>
                <div class="quantity">
                    <button onclick="changeQuantity('${item.name}', -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="changeQuantity('${item.name}', 1)">+</button>
                </div>
                <div class="price">
                    <span class="discount-price">${item.price * item.quantity} Р</span>
                </div>
            </div>
        `;
        cartContainer.appendChild(cartItem);
        totalPrice += item.price * item.quantity;
    });

    document.querySelector('h1').innerText = `Корзина (${cart.length} товаров)`;
    document.getElementById('checkout-button').disabled = cart.length === 0;
    document.getElementById('order-summary').innerText = `${cart.length} товара - ${totalPrice} Р`;
}

function changeQuantity(name, amount) {
    const item = cart.find(item => item.name === name);
    if (item) {
        item.quantity += amount;
        if (item.quantity < 1) {
            cart = cart.filter(i => i.name !== name);
        }
        updateCart();
    }
}

document.addEventListener("DOMContentLoaded", updateCart);