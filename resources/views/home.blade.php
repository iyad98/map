<!DOCTYPE html>
<html>

<head>
    <title>Simple Map</title>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('style.css')}}" />
    <script src="{{asset('index.js')}}"></script>
</head>

<body>
<div id="map"></div>


<!--
    <p>Lat : <span id="lat"></span></p>
    <p>Lng : <span id="lng"></span></p> -->

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>


<!-- Async script executes immediately and must be after any DOM elements used in callback. -->
<script src="https://maps.googleapis.com/maps/api/js?callback=initMap&libraries=&v=weekly"
        async></script>
</body>

</html>
