// Function to validate registration form
function validateRegistrationForm() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Simple validation (you can add more validation logic as needed)
    if (username.trim() === '') {
        alert('Please enter a username.');
        return false;
    }
    if (email.trim() === '') {
        alert('Please enter an email address.');
        return false;
    }
    if (password.trim() === '') {
        alert('Please enter a password.');
        return false;
    }
    if (password !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
        return false;
    }

    // Form is valid, can proceed with registration
    return true;
}

// Function to handle login form submission
function loginFormSubmit() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Example AJAX call (replace with actual login logic)
    // Here we're just showing an alert with the entered username and password
    alert(`Username: ${username}\nPassword: ${password}`);

    // Prevent form submission (since this is just an example)
    return false;
}

// Function to handle adding items to the cart
function addToCart(productId, productName, price) {
    // Construct the URL for the cart page with parameters
    const url = `cart.html?productId=${productId}&productName=${encodeURIComponent(productName)}&price=${price}`;
    
    // Redirect to the cart page with the product information
    window.location.href = url;
}

// JavaScript for interactive features
document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.parentElement.dataset.id;
            // Send the product ID to your backend for processing (e.g., adding to the cart)
            console.log(`Added product with ID: ${productId} to the cart.`);
            // You can also perform other actions like updating the UI or displaying messages
        });
    });

    // Check if there are URL parameters for cart item addition
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('productId') && urlParams.has('productName') && urlParams.has('price')) {
        // Get product information from URL parameters
        const productId = urlParams.get('productId');
        const productName = urlParams.get('productName');
        const price = parseFloat(urlParams.get('price'));

        // Create cart item element and add it to the cart items container
        const cartItemsContainer = document.querySelector('.cart-items');
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${productId}.jpg" alt="${productName}">
            <div class="item-details">
                <h3>${productName}</h3>
                <p>$${price.toFixed(2)}</p>
                <input type="number" value="1" min="1" max="10">
                <button class="btn-remove" onclick="removeCartItem(this)">Remove</button>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);

        // Update cart summary after adding the item
        updateCartSummary();
    }
});
