(function () {
    "use strict";

    var hour = new Date().getHours();
    var daylight  = hour >= 7 && hour < 19;

    var elements = document.getElementsByClassName("daylight");
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.add(daylight ? "on" : "off");
    }
})();