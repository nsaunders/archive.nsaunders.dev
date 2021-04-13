(function () {
    "use strict";

    function showView(viewName) {
        var i;
        var views = document.querySelectorAll(".view");
        for (i = 0; i < views.length; i++) {
            views[i].classList.remove("active");
        }
        var view = document.querySelector(".view." + viewName) || document.querySelector(".view.error");
        view.classList.add("active");
        var navItems = document.querySelectorAll("a.active");
        for (i = 0; i < navItems.length; i++) {
            navItems[i].classList.remove("active");
        }
        navItems = document.querySelectorAll("nav a[href='" + (viewName ? "#" + viewName : "") + "']");
        for (i = 0; i < navItems.length; i++) {
            navItems[i].classList.add("active");
        }
    }

    window.onhashchange = function () {
        showView(location.hash.substring(1));
    };

    if (!location.hash.substring(1)) {
        location.hash = document.querySelector("a.nav-start").attributes.getNamedItem("href").value;
    }

    showView(location.hash.substring(1));
})();