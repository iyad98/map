// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
let map, infoWindow;

function initMap() {
    var lat_ = localStorage.getItem("lat");
    var lng_ = localStorage.getItem("lng");
    if (lat_ != null && lng_ != null){
        map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: parseFloat(lat_), lng: parseFloat(lng_)},
            zoom: 6,
        });
        var marker = new google.maps.Marker({
          position: { lat: parseFloat(lat_), lng: parseFloat(lng_) },
          map: map,
          draggable: true,
          title: "Test Marker",
        });
    }else{
        map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 6,
        });
        var marker = new google.maps.Marker({
            position: { lat: -34.397, lng: 150.644 },
            map: map,
            draggable: true,
            title: "Test Marker",
        });
    }

    infoWindow = new google.maps.InfoWindow();

    const locationButton = document.createElement("button");

    locationButton.textContent = "Pan to Current Location";
    locationButton.classList.add("custom-map-control-button");
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
    locationButton.addEventListener("click", () => {
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };
                    localStorage.setItem("lat",position.coords.latitude);
                    localStorage.setItem("lng",position.coords.longitude);

                    infoWindow.setPosition(pos);
                    infoWindow.setContent("Location found.");
                    infoWindow.open(map);
                    map.setCenter(pos);
                },
                () => {
                    handleLocationError(true, infoWindow, map.getCenter());
                }
            );
        } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
        }
    });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
        browserHasGeolocation
            ? "Error: The Geolocation service failed."
            : "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(map);
}
