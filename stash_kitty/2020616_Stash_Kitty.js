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