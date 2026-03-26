// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Product prices
const productPrices = {
    'stone': '₹799',
    'custom-stone': '₹849',
    'leaf': '₹599'
};

const productTitles = {
    'stone': 'Premium Stone Engraving',
    'custom-stone': 'Customized Stone Engraving',
    'leaf': 'Leaf Engraving'
};

// Modal functions
function openOrderModal(productType) {
    document.getElementById('orderModal').style.display = 'block';
    document.getElementById('productType').value = productType;
    document.getElementById('modalTitle').textContent = `Order ${productTitles[productType]}`;
    document.getElementById('totalAmount').value = productPrices[productType];
    document.getElementById('totalAmount').previousElementSibling.textContent = 'Total Amount';
}

function closeOrderModal() {
    document.getElementById('orderModal').style.display = 'none';
    document.getElementById('orderForm').reset();
}

// Form submission - Send to WhatsApp
document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const product = formData.get('product');
    const name = formData.get('name');
    const mobile = formData.get('mobile');
    const address = formData.get('address');
    const design = formData.get('design');
    const amount = formData.get('amount');
    
    // WhatsApp message
    const message = `🛒 *NEW ORDER FROM A&B ENGRAVER* 🛒%0A%0A👤 *Customer:* ${name}%0A📱 *Mobile:* ${mobile}%0A📍 *Address:* ${address}%0A✨ *Product:* ${productTitles[product]}%0A🎨 *Design:* ${design || 'Not specified'}%0A💰 *Total Amount:* ${amount}%0A%0A*Order placed successfully!* ✅`;
    
    const whatsappNumber = '9867486495';
    const whatsappURL = `https://wa.me/91${whatsappNumber}?text=${message}`;
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank');
    
    // Close modal and reset form
    closeOrderModal();
    
    // Show success message
    alert('Order sent to WhatsApp successfully! 📱 Thank you! 🙏');
});

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('orderModal');
    if (event.target == modal) {
        closeOrderModal
