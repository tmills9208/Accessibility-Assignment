
// Removed maximum-scale in meta viewport
document.getElementsByTagName('meta')['viewport'].content='initial-scale=1.0, user-scalable=yes';

// Changing <section id="main"> into <main id="main">
// found solution here: https://stackoverflow.com/questions/13389751/change-tag-using-javascript
let oldMain = document.getElementById("main");
let newMain = document.createElement("main");

newMain.innerHTML = oldMain.innerHTML;
newMain.id = oldMain.id;

oldMain.parentNode.replaceChild(newMain, oldMain);