document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const checkoutButton = document.getElementById('checkout');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function updateCartDisplay() {
        cartItemsContainer.innerHTML = cart.map((item, index) => `
            <div class="cart-item">
                
                <p>${item.name} - ${item.price}</p>
                <button class="delete-btn" data-index="${index}">Delete</button>
            </div>
        `).join('');
        addDeleteEventListeners();
    }

    function addDeleteEventListeners() {
        const deleteButtons = document.querySelectorAll('.delete-btn');
        deleteButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const index = e.target.dataset.index;
                cart.splice(index, 1); // Remove item from cart
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCartDisplay(); // Update cart display
            });
        });
    }

    updateCartDisplay();

    checkoutButton.addEventListener('click', () => {
        if (cart.length > 0) {
            alert('Proceeding to checkout!');
            // Redirect to checkout page or handle checkout
        } else {
            alert('Your cart is empty!');
        }
    });
});
