var updateBtns = document.getElementsByClassName('update-cart');

// Event handler for the products ("Add to cart" button).
for (i = 0; i < updateBtns.length; i++) {
	updateBtns[i].addEventListener('click', function(){
		var productId = this.dataset.product;
		var action = this.dataset.action;
		// Checking
		console.log('productId:', productId, 'Action:', action);
		console.log('USER:', user);

		if (user == 'AnonymousUser'){
			addCookieItem(productId, action);
		}else{
			// Send a POST request to updateItem view via updateUserOrder.
			updateUserOrder(productId, action);
		}
	});
}

function updateUserOrder(productId, action){
	console.log('User is authenticated, sending data...');

	// Responsible for calling updateItem in views.
	var url = '/pcp/update_item/';
	fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			// Created in base.html
			'X-CSRFToken': csrftoken,
		}, 
		body: JSON.stringify({'productId': productId, 'action': action}),
	}).then((response) => {
		return response.json();
	}).then((data) => {
		// Allows us to see changes appear in our cart immediately once we render them.
		console.log('Data:', data)
		location.reload()
	});
}

function addCookieItem(productId, action){
	console.log('User is not authenticated');

	if (action == 'add'){
		// Check if the item is already in the cart. If not create it, if yes add 1 to the quantity.
		if (cart[productId] == undefined){
			cart[productId] = { 'quantity': 1 };
		}else{
			cart[productId]['quantity'] += 1;
		}
	}

	if (action == 'remove'){
		cart[productId]['quantity'] -= 1;
		// Delete the item if the quantinty is 0.
		if (cart[productId]['quantity'] <= 0){
			console.log('Item should be deleted');
			delete cart[productId];
		}
	}

	console.log('CART:', cart);
	// Update the cookie in the browser.
	document.cookie = 'cart=' + JSON.stringify(cart) + ';domain=;path=/';
	location.reload();
}