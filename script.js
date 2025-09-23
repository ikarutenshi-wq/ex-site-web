function myFunction() {
    var popup = document.getElementById("globalPopup");
    popup.classList.add("show");

    setTimeout(function() {
        popup.classList.remove("show");
    }, 2000);


}

function showdesc(event, el) {
    // Ferme toutes les autres popups de description
    document.querySelectorAll('.descPopup.show').forEach(function(p) {
        p.classList.remove('show');
    });

    var popup = el.querySelector('.descPopup');
    if (!popup) return;

    // Positionne la popup au-dessus de la souris
    const offsetX = 10;
    const offsetY = 10;
    popup.style.left = (event.clientX + offsetX) + "px";
    popup.style.top = (event.clientY - popup.offsetHeight - offsetY) + "px";
    popup.classList.add("show");
    event.stopPropagation();
}

document.addEventListener('click', function() {
    document.querySelectorAll('.descPopup.show').forEach(function(p) {
        p.classList.remove('show');
    });
});

function addToCart(id, name, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let exist = cart.find(item => item.id === id);
    if (exist){
        exist.quantity += 1;
    } else {
        cart.push({id, name, price, quantity: 1});
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').innerText = totalItems;
}

updateCartCount();