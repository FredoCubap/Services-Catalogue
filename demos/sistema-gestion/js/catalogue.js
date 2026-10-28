// Lógica del demo de catálogo — datos mockeados, sin backend.

let currentCurrency = 'CUP';
const cart = [];

function formatPrice(amount, currency) {
  return amount.toFixed(2) + ' ' + currency;
}

function getCategoryName(id) {
  const cat = DEMO_DATA.categories.find(c => c.id === id);
  return cat ? cat.name : '—';
}

function getUnitAbbr(id) {
  const u = DEMO_DATA.units.find(u => u.id === id);
  return u ? u.abbr : '';
}

function renderCategories() {
  const select = document.getElementById('category');
  DEMO_DATA.categories.forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat.id;
    opt.textContent = cat.name;
    select.appendChild(opt);
  });
}

function renderProducts(filter = '', categoryId = '') {
  const container = document.getElementById('products');
  container.innerHTML = '';

  const filtered = DEMO_DATA.products.filter(p => {
    const matchName = p.name.toLowerCase().includes(filter.toLowerCase()) ||
                      p.sku.toLowerCase().includes(filter.toLowerCase());
    const matchCat = !categoryId || p.category === parseInt(categoryId);
    return matchName && matchCat;
  });

  filtered.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    const stockClass = p.stock <= p.minStock ? 'color: var(--danger);' : '';
    card.innerHTML = `
      <img src="https://via.placeholder.com/220x140?text=${encodeURIComponent(p.name)}" alt="${p.name}" />
      <div class="product-name">${p.name}</div>
      <div class="product-sku">SKU: ${p.sku} · ${getCategoryName(p.category)}</div>
      <div class="product-price">${formatPrice(p.prices[currentCurrency], currentCurrency)}</div>
      <div class="product-stock" style="${stockClass}">Stock: ${p.stock} ${getUnitAbbr(p.unit)}${p.stock <= p.minStock ? ' ⚠️ bajo' : ''}</div>
      <button class="btn btn-sm" onclick="addToCart(${p.id})">Agregar</button>
    `;
    container.appendChild(card);
  });

  if (filtered.length === 0) {
    container.innerHTML = '<p style="grid-column:1/-1;text-align:center;color:var(--muted);">No se encontraron productos.</p>';
  }
}

function addToCart(productId) {
  const product = DEMO_DATA.products.find(p => p.id === productId);
  const existing = cart.find(c => c.id === productId);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id: product.id, name: product.name, price: product.prices[currentCurrency], qty: 1 });
  }
  renderCart();
}

function renderCart() {
  const container = document.getElementById('cart-items');
  container.innerHTML = '';
  let total = 0;
  cart.forEach((item, idx) => {
    total += item.price * item.qty;
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <span class="cart-item-name">${item.name}</span>
      <span class="cart-item-qty">x${item.qty}</span>
      <span>${formatPrice(item.price * item.qty, currentCurrency)}</span>
      <button class="btn btn-sm btn-danger" onclick="removeFromCart(${idx})">✕</button>
    `;
    container.appendChild(div);
  });
  document.getElementById('cart-total').textContent = total.toFixed(2);
  document.getElementById('cart-currency').textContent = currentCurrency;
}

function removeFromCart(idx) {
  cart.splice(idx, 1);
  renderCart();
}

// Event listeners
document.getElementById('search').addEventListener('input', (e) => {
  renderProducts(e.target.value, document.getElementById('category').value);
});

document.getElementById('category').addEventListener('change', (e) => {
  renderProducts(document.getElementById('search').value, e.target.value);
});

document.getElementById('currency').addEventListener('change', (e) => {
  currentCurrency = e.target.value;
  // Actualizar precios del carrito
  cart.forEach(item => {
    const product = DEMO_DATA.products.find(p => p.id === item.id);
    item.price = product.prices[currentCurrency];
  });
  renderProducts(document.getElementById('search').value, document.getElementById('category').value);
  renderCart();
});

// Init
renderCategories();
renderProducts();
renderCart();
