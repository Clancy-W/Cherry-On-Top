var app = new Vue({ 
    el: '#app',
    data: {
        message: `
			<h1>Cherry on Top</h1>
			<h1>Ice Cream Shop</h1>
			<p>Cherry on Top Ice Cream Shop is a startup ice cream business which delivers ice cream to your door. We offer ice cream designed by you, made by us. To find our menu, go to the <a href="#menu">Menu Page</a>, which has our full list of ingredients for you to order, for more information about us, go to the <a href="#about">About Page</a>, and to find out how to contact us go to the <a href="#contact">Contact Page</a></p>
			`,
		menu: `<h1>Menu</h1>
				<p>At <em>Cherry on Top Ice Cream</em>, we pride ourselves on our variance of flavours suited for everyones' tastebuds. We offer many different types of ice cream and sorbets, you can also mix in your own items, like chocolate. Here is a list of some of our flavours.
				<ul><li>Chocolate</li><li>Cookies and Cream</li><li>Mint Choc</li><li>Golden Gaytime</li><li>Mango</li><li>Licquorice</li></ul>`,
		shop: `<h1>Shop</h1>
				<p>This is the shop, where you can make and buy items.</p>`,
		hash: window.location.hash
    }
});
