# Morning Challenge 20200617 

## DOM Manipulation - About Me


Start with "about_me.html", and:

- Add a script tag to the bottom of the HTML body. In the JavaScript:
- Change the body tag's style so it has a font-family of "Arial, sans-serif".
- Replace each of the spans (nickname, favourites, hometown) with your own information.
- Iterate through each li and change the class to "list-item".
- Create a new img element and set its src attribute to a picture of you. Append that element to the page.

In the HTML head:

- Add a style tag that sets a rule for .list-item to make the colour red

### My Solution

```html
<!DOCTYPE html>
<html>
	<head>
   		<meta charset="utf-8"/>
   		<title>About Me</title>
		<style>
			.list-item {
				color: red;
			}
		</style>
    </head>
    <body>
      	<h1>About Me</h1>

		<ul>
        	<li>Nickname: <span id="nickname"></span>
        	<li>Favorites:  <span id="favorites"></span>
        	<li>Hometown: <span id="hometown"></span>
      	</ul>
		  <script>
			let nickname = document.getElementById("nickname");
			let favorites = document.getElementById("favorites");
			let hometown = document.getElementById("hometown");
			
			nickname.innerHTML = "Evey";
			favorites.innerHTML = "FastTrack 2020, Back Row Rules, Coding";
			hometown.innerHTML = "Singleton";
			
			// Update the font family of the body
			document.body.style.fontFamily = "Arial, sans-serif";
			
			// Add the "list-item" class to each of the 'li' elements
			Array.from(document.getElementsByTagName('li')).forEach(item => item.className += "list-item");
			
			// Create a new image element and append to the page
			let newImage = document.createElement('img');
			
			// Helper function to set attributes of image
			 function setAttributes(elem, obj) {
				for (let prop in obj) {
					if (obj.hasOwnProperty(prop)) {
						elem[prop] = obj[prop];
					}
				}
			}
			
			// Set source and width attributes to
			setAttributes(newImage, {
				src: "https://evey-pea.github.io/portfolio/assets/face-picture.png",
				width: "250"
				});
			
			// Add the image to the document
			document.body.appendChild(newImage);
		  </script>
    </body>
</html>
```

BEAST MODE

For the beast mode challenge, modify your HTML/JS so that is can display a random user that is obtained from

https://randomuser.me/

This is an api that serves random user data. Have your program grab a random user (triggered by a button click) and display their information on the browser

### My Beast Mode Solution

```html

```