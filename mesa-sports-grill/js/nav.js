!function(){"use strict";function a(a){var b,c=document.querySelectorAll(".view");for(b=0;b<c.length;b++)c[b].classList.remove("active");(document.querySelector(".view."+a)||document.querySelector(".view.error")).classList.add("active");var d=document.querySelectorAll("a.active");for(b=0;b<d.length;b++)d[b].classList.remove("active");for(d=document.querySelectorAll("nav a[href='"+(a?"#"+a:"")+"']"),b=0;b<d.length;b++)d[b].classList.add("active")}window.onhashchange=function(){a(location.hash.substring(1))},location.hash.substring(1)||(location.hash=document.querySelector("a.nav-start").attributes.getNamedItem("href").value),a(location.hash.substring(1))}();