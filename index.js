var app = new Vue({ 
    el: '#app',
    data: {
        message: `
			<h1>Cherry on Top</h1>
			<h1>Ice Cream Shop</h1>
			<p>Cherry on Top Ice Cream Shop is a startup ice cream business which delivers ice cream to your door. We offer ice cream designed by you, made by us. To find our menu, go to the <a href="#menu">Menu Page</a>, which has our full list of ingredients for you to order, for more information about us, go to the <a href="#about">About Page</a>, and to find out how to contact us go to the <a href="#contact">Contact Page</a></p>
			`,
		hash: window.location.hash
    }
});
