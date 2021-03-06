
# Stash kitty

There is a picture of a cute cat, and a moustache.

## Core

Your task is to implement an event listener that will put the moustache where the user clicks, so you can give the cute cat a moustache.

Implement the scaffolded function in *script.js* to accomplish this, and use the function in an event listener.

Some tips:
- Two event properties that will help here are *pageX* and *pageY*. These return coordinates of the mouse. Use console.log to see what is returned.
- Two style properties you can use are *style.top* and *style.left*, although you could find another way to place the moustache. Note that you have to include units when you set these properties.

### Core Solution

```javascript
const cat = document.querySelector("#cat-pic")
const stash = document.querySelector("#stash-pic")

function addStash(event) {
  const xOffset = stash.getBoundingClientRect().width/2;
  const yOffset = stash.getBoundingClientRect().height/2;
  stash.style.top = `${event.pageY - yOffset}px`
  stash.style.left = `${event.pageX - xOffset}px`
}

// Add an event listener to the correct DOM node here - using your addStash function, and firing on click.
cat.addEventListener("click", addStash);
```

## Beast Mode

Make the mustache a "drag and drop" element, so users can place it by dragging and dropping instead of clicking

### My Beast Mode Solution

Done. For extra giggles I added rotating of the moustache with a right click drag...

```javascript

const stash = document.querySelector("#stash-pic")

// Suppress the HTML5 drag and drop of the stash 
stash.ondragstart = () => {
  return false;
};

// Suppress the browser context menu when right clicked
document.oncontextmenu = () => {
  return false;
}

// Move stash when dragged with left click
const moveStash = (event) => {  
  // Move the stash infromt of the kitty photo
  stash.style.zIndex = 1;
  
  // move our absolutely positioned stash under the pointer as the mouse moves
  const onMouseMove = (event) => {
    stash.style.left = event.pageX - (stash.offsetWidth / 2) + 'px';
    stash.style.top = event.pageY - (stash.offsetHeight / 2) + 'px';
  }

  // move the stash on mousemove
  document.addEventListener('mousemove', onMouseMove);
  
  // drop the stash, remove unneeded handlers
  stash.onmouseup = () => {
    document.removeEventListener('mousemove', onMouseMove);
    stash.onmouseup = null;
  };
};

// Rotate stash when right click dragged
const rotateStash = (event) => {
  // get positioning detail of stash element
  const boundingStart = stash.getBoundingClientRect();
    
  // find center of rotation for radian calculation
  const centerX = boundingStart.left + (boundingStart.width / 2);
  const centerY = boundingStart.top + (boundingStart.height / 2);
  
  // follow the point the pointer
  const onMouseMove = (event) => {
    // Determine radians
    let radians = Math.atan2(event.pageX - centerX, event.pageY - centerY);
    // Convert to degrees with 90deg offset
    let degree = (radians * (180 / Math.PI) * -1) +90;
    
    // Update the rotation of the stash with each new calculation
    stash.style.transform = `rotate(${degree}deg)`; 
  }

  // Listen for the mouse moving from it's original position
  document.addEventListener('mousemove', onMouseMove);

  // Listen for mouse release; stop rotating, remove unneeded handlers
  stash.onmouseup = () => {
    document.removeEventListener('mousemove', onMouseMove);
    stash.onmouseup = null;
  };
};

// select the correct function for either a left of right click drag 
stash.onmousedown = (event) => {
  if (event.button === 0) {
    console.log("Debug: Left clicked, moving...")
    moveStash(event);
  } else if (event.button === 2) {
    console.log("Debug: Right clicked, rotating... ")
    rotateStash(event);
  };
};

```