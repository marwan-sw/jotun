const cartButton = document.getElementById('cartButton');
const cartSidebar = document.getElementById('cartSidebar');
const closeSidebar = document.getElementById('closeSidebar');
const cartItems = document.getElementById('cartItems');
const totalPrice = document.getElementById('totalPrice');

let cart = [];

const products = [
    { id: 1, name: "دهان أحمر", price: 30, image: "image/red-paint.jpg" },
    { id: 2, name: "دهان أزرق", price: 25, image: "image/blue-paint.jpg" },
    { id: 3, name: "دهان أخضر", price: 35, image: "image/green-paint.jpg" },
    { id: 4, name: "دهان أصفر", price: 20, image: "image/yellow-paint.jpg" }
];

// عرض المنتجات
function displayProducts() {
    const productsContainer = document.querySelector('.products');
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price} ريال</p>
            <button onclick="addToCart(${product.id})">أضف إلى السلة</button>
        `;
        productsContainer.appendChild(productElement);
    });
}

// إضافة منتج إلى السلة
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

// تحديث السلة
function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(product => {
        const cartItem = document.createElement('li');
        cartItem.innerText = `${product.name} - ${product.price} ريال`;
        cartItems.appendChild(cartItem);
        total += product.price;
    });
    totalPrice.innerText = `الإجمالي: ${total} ريال`;
    cartButton.innerText = `سلة المشتريات (${cart.length})`;
}

// فتح العربة
cartButton.addEventListener('click', () => {
    cartSidebar.style.right = '0';
});

// إغلاق العربة
closeSidebar.addEventListener('click', () => {
    cartSidebar.style.right = '-400px';
});

// عرض المنتجات عند تحميل الصفحة
displayProducts();
