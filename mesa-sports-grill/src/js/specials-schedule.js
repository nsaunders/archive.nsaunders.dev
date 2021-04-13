(function () {
    "use strict";

    var i;

    var now = new Date();
    now.setHours(now.getHours()-3);
    var day = now.getDay();
    var classes = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    var dayClasses = [];
    for (i = day; i <= 6; i++) {
        dayClasses.push(classes[i]);
    }
    for (i = 0; i < day; i++) {
        dayClasses.push(classes[i]);
    }
    var daySpecials = document.querySelector(".daily-specials");
    for (i = 0; i < dayClasses.length; i++) {
        var dayElement = daySpecials.querySelector("." + dayClasses[i]);
        daySpecials.removeChild(dayElement);
        daySpecials.appendChild(dayElement);
    }
    document.querySelector(".daily-specials section").classList.add("emphasis");

    function removeSpecialsHeights() {
        var dailySpecialSections = daySpecials.querySelectorAll(".daily-special section");
        for (i = 0; i < dailySpecialSections.length; i++) {
            dailySpecialSections[i].style.height = "";
        }
    }

    function fixSpecialsHeights() {
        var dailySpecialSections = daySpecials.querySelectorAll(".daily-special section");
        var maxY = 0;
        var leftX = 0;
        removeSpecialsHeights();
        for (i = 0; i < dailySpecialSections.length; i++) {
            if (dailySpecialSections[i].offsetLeft == leftX) {
                return removeSpecialsHeights();
            }
            leftX = dailySpecialSections[i].offsetLeft;
            if (dailySpecialSections[i].offsetHeight > maxY) {
                maxY = dailySpecialSections[i].offsetHeight;
            }
        }
        for (i = 0; i < dailySpecialSections.length; i++) {
            dailySpecialSections[i].style.height = maxY + "px";
        }
    }

    window.addEventListener("resize", fixSpecialsHeights);
    window.addEventListener("load", fixSpecialsHeights);
})();