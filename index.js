var app = new Vue({ 
    el: '#app',
    data: {
        message: `
			<h1>Cherry on Top</h1>
			<h1>Ice Cream Shop</h1>
			<div class="container"><p>Cherry on Top Ice Cream Shop is a startup ice cream business which delivers ice cream to your door. We offer ice cream designed by you, made by us. To find our menu, go to the <a href="#menu">Menu Page</a>, which has our full list of ingredients for you to order, for more information about us, go to the <a href="#about">About Page</a>, and to find out how to contact us go to the <a href="#contact">Contact Page</a></p></div>
			<div class="full-icecream" style="display:flex;align-items:center;"><div class="container">
				<div class="row">
					<div class="col s12 m6">
					  <div class="card z-depth-1 hoverable">
						<div class="card-content">
						  <span class="card-title">We deliver fresh ice cream to your door.</span>
						  <p>We pride ourselves on our delivery of fresh, cold ice cream of your choice. We offer delivery all over the country and will make sure you get the ice cream you ordered, fresh and fast. We asure you will get quality icecream for your money, not melted, bad icecream. Go to the store to start creating your dream ice cream today!</p>
						</div>
						<div class="card-action">
						  <a href="#">Go to the Store</a>
						</div>
					  </div>
				</div>
				
				</div>
			  </div></div>
			<h1>Social Media</h1>
			<div class="container"><h3 align="center">Find us on our social media platforms</h3><p>Our business sees the future is completely online, so we promote having no store front, and going fully online. Do you really want to leave the house to get ice cream? You do it with pizza, its about time you did it with ice cream. You can also find us on many different sites, so you can get updated easily.</p>
			<div class="row">
					<div class="col s12 m6 l3" align="center">
						<div class="card hoverable">
							<div class="card-content">
							  <img src="https://cdn2.iconfinder.com/data/icons/free-social-media-17/155/facebook-512.png" style="width:50%">
							  <span class="card-title">Facebook</span>
							  <p>Facebook is an easy way for you to reach out and contact us.</p>
							</div>
<div class="card-action">
          <a href="http://www.facebook.com">Take me there!</a>
        </div>
						</div>
					</div>
					<div class="col s12 m6 l3 full" align="center">
						<div class="card hoverable">
							<div class="card-content">
							  <img src="https://cdn2.iconfinder.com/data/icons/free-social-media-17/158/twitter-512.png" style="width:50%">
							  <span class="card-title">Twitter</span>
							  <p>On Twitter we will retweet images that you guys send to us and announce stuff.</p>
							</div>
<div class="card-action">
          <a href="http://www.twitter.com">Take me there!</a>
        </div>
						</div>
					</div>
					<div class="col s12 m6 l3" align="center">
						<div class="card hoverable">
							<div class="card-content">
							  <img src="https://cdn2.iconfinder.com/data/icons/free-social-media-17/157/youtube_2-512.png" style="width:50%">
							  <span class="card-title">YouTube</span>
							  <p>On our YouTube page you will be able to peek at new flavours, cones and more!</p>
							</div>
<div class="card-action">
          <a href="http://www.youtube.com">Take me there!</a>
        </div>
						</div>
					</div>
					<div class="col s12 m6 l3" align="center">
						<div class="card hoverable">
							<div class="card-content">
							  <img src="https://cdn2.iconfinder.com/data/icons/free-social-media-17/155/instagram-512.png" style="width:50%">
							  <span class="card-title">Instagram</span>
							  <p>On Instagram we will share promotional photos and you can reach out to us.</p>
							</div>
<div class="card-action">
          <a href="http://www.instagram.com">Take me there!</a>
        </div>
						</div>
					</div>
				</div></div>
				<div class="container"><div class="section"><div class="row"><div class="col s12 l6">
        <div class="card-panel grey lighten-5 z-depth-1">
          <div class="row valign-wrapper">
            <div class="col s2">
              <img src="http://sg-fs.com/wp-content/uploads/2017/08/user-placeholder.png" alt="" class="circle responsive-img"> <!-- notice the "circle" class -->
            </div>
            <div class="col s10">
              <span class="black-text">
                This is a square image. Add the "circle" class to it to make it appear circular.
              </span>
            </div>
          </div>
        </div>
      </div><div class="col s12 l6">
        <div class="card-panel grey lighten-5 z-depth-1">
          <div class="row valign-wrapper">
            <div class="col s10">
              <span class="black-text">
                This is a square image. Add the "circle" class to it to make it appear circular.
              </span>
            </div>
            <div class="col s2">
              <img src="http://sg-fs.com/wp-content/uploads/2017/08/user-placeholder.png" alt="" class="circle responsive-img"> <!-- notice the "circle" class -->
            </div>
          </div>
        </div>
      </div><div class="col s12 l6">
        <div class="card-panel grey lighten-5 z-depth-1">
          <div class="row valign-wrapper">
            <div class="col s2">
              <img src="http://sg-fs.com/wp-content/uploads/2017/08/user-placeholder.png" alt="" class="circle responsive-img"> <!-- notice the "circle" class -->
            </div>
            <div class="col s10">
              <span class="black-text">
                This is a square image. Add the "circle" class to it to make it appear circular.
              </span>
            </div>
          </div>
        </div>
      </div><div class="col s12 l6">
        <div class="card-panel grey lighten-5 z-depth-1">
          <div class="row valign-wrapper">
            <div class="col s10">
              <span class="black-text">
                This is a square image. Add the "circle" class to it to make it appear circular.
              </span>
            </div>
            <div class="col s2">
              <img src="http://sg-fs.com/wp-content/uploads/2017/08/user-placeholder.png" alt="" class="circle responsive-img"> <!-- notice the "circle" class -->
            </div>
          </div>
        </div>
      </div></div></div></div>
			`,
		menu: `<h1>Menu</h1>
				<p>At <em>Cherry on Top Ice Cream</em>, we pride ourselves on our variance of flavours suited for everyones' tastebuds. We offer many different types of ice cream and sorbets, you can also mix in your own items, like chocolate. Here is a list of some of our flavours.
				<ul><li>Chocolate</li><li>Cookies and Cream</li><li>Mint Choc</li><li>Golden Gaytime</li><li>Mango</li><li>Licquorice</li></ul>`,
		shop: `<h1>Shop</h1>
				<p>This is the shop, where you can make and buy items.</p>`,
		counter: 0
    }
});
