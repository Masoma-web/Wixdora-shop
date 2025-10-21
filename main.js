2// نمایش محصولات با Fetch
fetch('products.json')
.then(res => res.json())
.then(products => {
  const container = document.getElementById('product-list');
  products.forEach(p => {
    const card = document.createElement('div');
    card.className = 'col-md-4 mb-4';
    card.innerHTML = `
      <div class="card h-100">
        <img src="${p.image}" class="card-img-top" alt="${p.name}">
        <div class="card-body">
          <h5 class="card-title">${p.name}</h5>
          <p class="card-text">${p.description}</p>
          <p class="card-text"><strong>${p.price} افغانی</strong></p>
          <button class="btn btn-primary add-to-cart" data-id="${p.id}">افزودن به سبد</button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });

  // افزودن به سبد خرید
  document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', function() {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      const id = parseInt(this.dataset.id);
      const product = products.find(p => p.id === id);
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
      alert(`${product.name} به سبد خرید اضافه شد!`);
    });
  });
});

// Login
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', function(e) {
e.preventDefault();
const username = document.getElementById('username').value;
localStorage.setItem('username', username);
document.getElementById('welcomeMessage').innerText = `خوش آمدید، ${username}!`;
const modal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
modal.hide();
});

// نمایش نام کاربر در بارگذاری صفحه
window.addEventListener('load', () => {
const username = localStorage.getItem('username');
if(username) document.getElementById('welcomeMessage').innerText = `خوش آمدید، ${username}!`;
});

// Logout
const logoutBtn = document.createElement('button');
logoutBtn.innerText = 'خروج';
logoutBtn.className = 'btn btn-sm btn-danger ms-2';
logoutBtn.addEventListener('click', () => {
localStorage.removeItem('username');
document.getElementById('welcomeMessage').innerText = '';
});
document.querySelector('.navbar-nav').appendChild(logoutBtn);
