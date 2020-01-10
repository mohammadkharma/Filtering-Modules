// handling js code while document is loading
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}
// --------------------------------------------------------------------------------------------

// Dashboard: adding event listeners to buttons and inputs when document is ready
function ready() {

    // 'removeCartItem' buttons:
    var removeCartItemButtons = document.getElementsByClassName('close');
    // console.log(removeCartItemButtons);
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i];
        button.addEventListener('click', removeCartItem);
    }

    // 'addToCart' buttons:
    var addToCartButtons = document.getElementsByClassName('shop-item-button');
    // looping inputs and adding a 'change' event listener to each, then applying the quantityChanged func 
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i];
        button.addEventListener('click', addToCardClicked);
    }

    // handling the purchase button
    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)

}
// --------------------------------------------------------------------------------------------

// removing item from cart (used in 'ready' & 'addItemToCart')  
function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
}

// --------------------------------------------------------------------------------------------

// adding items to cart (used in 'ready')  
function addToCardClicked(event) {
    var buttonClicked = event.target;
    var shopItem = buttonClicked.parentElement.parentElement;
    var title = shopItem.getElementsByClassName('title')[0].innerText;
    var time = shopItem.getElementsByClassName('time')[0].innerText.replace('Time:', "");
    var price = shopItem.getElementsByClassName('price')[0].innerText.replace('Cost:', "");
    // console.log(shopItem, title, time, price)

    addItemToCart(title, time, price);
    updateCartTotal()
}

function addItemToCart(title, time, price) {
    var cartRow = document.createElement('div');
    var cartItems = document.getElementsByClassName('cart-items')[0];
    // alerting if the item is added twice
    var cartItemsNames = cartItems.getElementsByClassName('cart-item-title');
    for (var i = 0; i < cartItemsNames.length; i++) {
        if (cartItemsNames[i].innerText == title) {
            alert('This item is already added to the cart');
            return
        }
    }
    // creating a cart row for the new added items & appending it the the cart
    var cartRowContents = `
    <div class="cart-row cart-item">
        <span class="cart-item-title">${title}</span>
        <span class="cart-item-time">${time}</span>
        <span class="cart-item-price">${price}</span>
        <button type="button" class="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>`;
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
    // adding event listener to the new cart items by applying 'removeCartItem' func
    cartRow.getElementsByClassName('close')[0].addEventListener('click', removeCartItem);
    // updating total money by adding event listener to the new cart items by applying 'quantityChanged' func
}

// --------------------------------------------------------------------------------------------

// updating total money by multiplying the prices and quantitities (used in all functions)
function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0];
    var cartRows = cartItemContainer.getElementsByClassName('cart-row');
    var totalPrice = 0;
    var totalTime = 0;
    // looping through prices and adding their values to get the total price
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('cart-item-price')[0];
        var price = parseFloat(priceElement.innerText.replace('€', ''));
        totalPrice = totalPrice + price;
        // console.log(totalPrice)
    }
    // looping through times and adding their values to get the total time
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var timeElement = cartRow.getElementsByClassName('cart-item-time')[0];
        var time = parseFloat(timeElement.innerText.replace('weeks', ''));
        totalTime = totalTime + time;
        // console.log(totalTime)
    }
    // rounding the results to maximum two numbers after the decimal
    // total = Math.round(total * 100) / 100;
    document.getElementsByClassName('cart-total-price')[0].innerText = totalPrice + ',00 €';
    var calculatedTime = (totalTime < 4) ? totalTime + ' weeks' : Math.round(totalTime/4) + ' months'; 
    
    document.getElementsByClassName('cart-total-time')[0].innerText = calculatedTime;
    
}

// --------------------------------------------------------------------------------------------

// purchase func (used in 'ready')
function purchaseClicked() {
    // alert('Thank you for your purchase!');
    var cartItems = document.getElementsByClassName('cart-items')[0];
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild);
        
    }
    updateCartTotal();
    var time = document.getElementsByClassName('cart-total-time')[0];
    time.innerText = time.innerText.replace(' weeks', '');
    var price = document.getElementsByClassName('cart-total-price')[0];
    price.innerText = price.innerText.replace(',00 €', '');
}

