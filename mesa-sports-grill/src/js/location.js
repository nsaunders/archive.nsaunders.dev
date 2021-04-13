(function () {
    "use strict";

    var map;

    function initialize() {
        if (location.hash != "#location") return;

        if (map) {
            var center = map.getCenter();
            google.maps.event.trigger(map, "resize");
            map.setCenter(center);
            return;
        }

        var map_canvas = document.querySelector(".map");
        var map_options = {
            center: new google.maps.LatLng(33.4518021, -111.7329801),
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(map_canvas, map_options);

        var marker = new google.maps.Marker({
            position: map_options.center,
            map: map,
            title: 'Mesa Sports Grill'
        });

        var info = '<div class="map-address">';
        info += '<span class="name">Mesa Sports Grill</span>';
        info += '<span class="details 1">4545 East McKellips Road</span>';
        info += '<span class="details 2">Suite 108</span>';
        info += '<span class="municipality">Mesa</span>';
        info += '<span class="region">AZ</span>';
        info += '<span class="postal-code">85215</span>';
        info += '<span class="phone-number">(480) 807-3500</span>';
        info += '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: info
        });

        infowindow.open(map, marker);
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map,marker);
        });
    }

    window.addEventListener("load", initialize);
    window.addEventListener("hashchange", initialize);
    window.addEventListener("resize", initialize);
})();