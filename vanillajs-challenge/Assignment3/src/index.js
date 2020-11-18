// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const hello = document.querySelector("h2");
const superEventHandler = {
  mouseEnter: function handleMouseEnter() {
    hello.style.color = colors[0];
    hello.innerHTML = "The mouse is here!";
  },
  mouseLeave: function handleMouseLeave() {
    hello.style.color = colors[1];
    hello.innerHTML = "The mouse is gone!";
  },
  resize: function handleResize() {
    hello.style.color = colors[2];
    hello.innerHTML = "You just resized!";
  },
  contextMenu: function handleContextMenu() {
    hello.style.color = colors[4];
    hello.innerHTML = "That was a right click!";
  },
};

hello.addEventListener("mouseenter", superEventHandler.mouseEnter);
hello.addEventListener("mouseleave", superEventHandler.mouseLeave);
window.addEventListener("resize", superEventHandler.resize);
document.addEventListener("contextmenu", superEventHandler.contextMenu);
