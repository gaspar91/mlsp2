//oslo map

// Initialize and add the map
function initMap() {
  // The location of Oslo
  var oslo = { lat: 59.911491, lng: 10.757933 };
  // The map, centered at Oslo
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: oslo,
  });

  // The  Restaurant Locations

  $("#restaurants").click(function () {
       var oslo = { lat: 59.9160454, lng: 10.7362453 };
       var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 14,
            center: oslo,
        });
    //array of markers

    var restaurantMarkers = [
      {
        coords: { lat: 59.9178541, lng: 10.7339675 },
        content:
          '<div class="marker" style="background: url(assets/images/restaurants/restaurant1.jpg) no-repeat center"><h6>Den Glade Gris</h6><br><p>St. Olavs Gate 33</p></div>',
      },
      {
        coords: { lat: 59.9088001, lng: 10.7247294 },
        content:
          '<div class="marker" style="background: url(assets/images/restaurants/restaurant2.jpg) no-repeat center"><h6>Rorbua Aker Brygge</h6><br><p>Stranden 71</p></div>',
      },
      {
        coords: { lat: 59.9075576, lng: 10.758191 },
        content:
          '<div class="marker" style="background: url(assets/images/restaurants/restaurant3.jpg) no-repeat center"><h6>Maaemo</h6><br><p>Dronning Eufemias gate 23</p></div>',
      },
      {
        coords: { lat: 59.9226899, lng: 10.7356068 },
        content:
          '<div class="marker" style="background: url(assets/images/restaurants/restaurant4.jpg) no-repeat center"><h6>Sofies Mat Og Vinhus</h6><br><p>Sofies gate 15</p></div>',
      },
      {
        coords: { lat: 59.9167545, lng: 10.7377502 },
        content:
          '<div class="marker" style="background: url(assets/images/restaurants/restaurant5.jpg) no-repeat center"><h6>Restaurant Fjord</h6><br><p>Kristian Augusts gate 11</p></div>',
      },
      {
        coords: { lat: 59.9091625, lng: 10.7422209 },
        content:
          '<div class="marker" style="background: url(assets/images/restaurants/restaurant6.jpg) no-repeat center"><h6>Rest</h6><br><p>Kirkegata 1-3</p></div>',
      },
      {
        coords: { lat: 59.9163672, lng: 10.7506229 },
        content:
          '<div class="marker" style="background: url(assets/images/restaurants/restaurant7.jpg) no-repeat center"><h6>Arakataka</h6><br><p>Mariboes gate 7B</p></div>',
      },
      {
        coords: { lat: 59.9163238, lng: 10.7387246 },
        content:
          '<div class="marker" style="background: url(assets/images/restaurants/restaurant8.jpg) no-repeat center"><h6>Elias mat & sånt</h6><br><p>Kristian Augusts gate 14</p></div>',
      },
      {
        coords: { lat: 59.9229418, lng: 10.7511292 },
        content:
          '<div class="marker" style="background: url(assets/images/restaurants/restaurant9.jpg) no-repeat center"><h6>Restaurant Kontrast</h6><br><p>Maridalsveien 15a</p></div>',
      },
      {
        coords: { lat: 59.912725, lng: 10.7093833 },
        content:
          '<div class="marker" style="background: url(assets/images/restaurants/restaurant10.jpg) no-repeat center"><h6>Hos Thea</h6><br><p>Gabels gate 11</p></div>',
      },
    ];

    //Loop Through Markers
    for (var i = 0; i < restaurantMarkers.length; i++) {
      //Add Marker
      addMarker(restaurantMarkers[i]);
    }

    //Add Marker Function
    function addMarker(props) {
      var marker = new google.maps.Marker({
        position: props.coords,
        map: map,
        icon: "https://img.icons8.com/office/40/000000/marker.png",
      });
      if (props.content) {
        var infowindow = new google.maps.InfoWindow({
          content: props.content,
        });

        marker.addListener("click", function () {
          infowindow.open(map, marker);
        });
      }
    }
  });

    // The  CoffeeShop Locations 

  $("#coffeeshops").click(function () {
      var oslo = { lat: 59.9211046, lng: 10.7427449 };
       var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 14,
            center: oslo,
        });
    //array of markers

    var coffeeshopMarkers = [
      {
        coords: { lat: 59.9141009, lng: 10.7528633 },
        content:
          '<div class="marker" style="background: url(assets/images/coffeeshops/coffee3.jpg) no-repeat center"><h6>Espresso House</h6><br><p>Gunerius, Storgata 32</p></div>',
      },
      {
        coords: { lat: 59.9097227, lng: 10.7266688 },
        content:
          '<div class="marker" style="background: url(assets/images/coffeeshops/coffee2.jpg) no-repeat center"><h6>Starbucks</h6><br><p>Stranden 7</p></div>',
      },
      {
        coords: { lat: 59.9233709, lng: 10.7556998 },
        content:
          '<div class="marker" style="background: url(assets/images/coffeeshops/coffee1.jpg) no-repeat center"><h6>Tim Wendelboe</h6><br><p>Grüners gate 1</p></div>',
      },
      {
        coords: { lat: 59.9172303, lng: 10.7397703, },
        content:
          '<div class="marker" style="background: url(assets/images/coffeeshops/coffee4.jpg) no-repeat center"><h6>Fuglen</h6><br><p>Universitetsgata 2</p></div>',
      },
      {
        coords: { lat: 59.9231622, lng: 10.7260787 },
        content:
          '<div class="marker" style="background: url(assets/images/coffeeshops/coffee5.jpg) no-repeat center"><h6>Stockfleths</h6><br><p>Josefines gate 23</p></div>',
      },
      {
        coords: { lat: 59.9220352, lng: 10.7512782 },
        content:
          '<div class="marker" style="background: url(assets/images/coffeeshops/coffee6.jpg) no-repeat center"><h6>Hendrix Ibsen</h6><br><p>Vulkan 22</p></div>',
      },
      {
        coords: { lat: 59.9280583, lng: 10.7592917 },
        content:
          '<div class="marker" style="background: url(assets/images/coffeeshops/coffee7.jpg) no-repeat center"><h6>Supreme Roastworks AS</h6><br><p>Thorvald Meyers gate 18A</p></div>',
      },
      {
        coords: { lat: 59.9149799, lng: 10.7504415 },
        content:
          '<div class="marker" style="background: url(assets/images/coffeeshops/coffee8.jpg) no-repeat center"><h6>My ugly baby</h6><br><p>Youngs gate 9</p></div>',
      },
      {
        coords: { lat: 59.9243908, lng: 10.7396507 },
        content:
          '<div class="marker" style="background: url(assets/images/coffeeshops/coffee9.jpg) no-repeat center"><h6>Java espresso</h6><br><p>Ullevålsveien 47</p></div>',
      },
      {
        coords: { lat: 59.9207398, lng: 10.728077 },
        content:
          '<div class="marker" style="background: url(assets/images/coffeeshops/coffee10.jpg) no-repeat center"><h6>Kaffebrenneriet</h6><br><p>Parkveien 25</p></div>',
      },
      ];

     //Loop Through Markers
    for (var i = 0; i < coffeeshopMarkers.length; i++) {
      //Add Marker
      addMarker(coffeeshopMarkers[i]);
    }

    //Add Marker Function
    function addMarker(props) {
      var marker = new google.maps.Marker({
        position: props.coords,
        map: map,
        icon: "https://img.icons8.com/office/40/000000/marker.png",
      });
      if (props.content) {
        var infowindow = new google.maps.InfoWindow({
          content: props.content,
        });

        marker.addListener("click", function () {
          infowindow.open(map, marker);
        });
      }
    }
  });

    // The  Accomodation Locations 
    
  $("#accomodation").click(function () {
      var oslo = { lat: 59.9132002, lng: 10.7533018 };
       var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 15,
            center: oslo,
        });
    //array of markers

    var accomodationMarkers = [
      {
        coords: { lat: 59.9100318, lng: 10.741466, },
        content:
          '<div class="marker" style="background: url(assets/images/accomodation/room1.jpg) no-repeat center"><h6>Saga Hotel Oslo Central</h6><br><p>Kongens gate 7</p></div>',
      },
      {
        coords: { lat: 59.9156194, lng: 10.7404806 },
        content:
          '<div class="marker" style="background: url(assets/images/accomodation/room2.jpg) no-repeat center"><h6>Thon Hotel Rosenkrantz Oslo</h6><br><p>Rosenkrantz gate 1</p></div>',
      },
      {
        coords: { lat: 59.9136725, lng: 10.7774321 },
        content:
          '<div class="marker" style="background: url(assets/images/accomodation/room3.jpg) no-repeat center"><h6>Central City Apartments</h6><br><p>Kjølberggata 29C</p></div>',
      },
      {
        coords: { lat: 59.9092528, lng: 10.7666435 },
        content:
          '<div class="marker" style="background: url(assets/images/accomodation/room4.jpg) no-repeat center"><h6>Center rooms</h6><br><p>Schweigaards gate 44</p></div>',
      },
      {
        coords: { lat: 59.9103456, lng: 10.7472907 },
        content:
          '<div class="marker" style="background: url(assets/images/accomodation/room5.jpg) no-repeat center"><h6>Citybox Oslo</h6><br><p>Prinsens gate 6</p></div>',
      },
      {
        coords: { lat: 59.9106631, lng: 10.748712 },
        content:
          '<div class="marker" style="background: url(assets/images/accomodation/room6.jpg) no-repeat center"><h6>Comfort Hotel Xpress</h6><br><p>Fred Olsens gate 11</p></div>',
      },
      {
        coords: { lat: 59.9144276, lng: 10.7421132 },
        content:
          '<div class="marker" style="background: url(assets/images/accomodation/room7.jpg) no-repeat center"><h6>P-Hotel Oslo</h6><br><p>Grensen 19</p></div>',
      },
      {
        coords: { lat: 59.9139846, lng: 10.7556568 },
        content:
          '<div class="marker" style="background: url(assets/images/accomodation/room8.jpg) no-repeat center"><h6>Thon Hotel Spectrum</h6><br><p>Brugata 7</p></div>',
      },
      {
        coords: { lat: 59.9164346, lng: 10.749522 },
        content:
          '<div class="marker" style="background: url(assets/images/accomodation/room9.jpg) no-repeat center"><h6>Comfort Hotel Youngstorget</h6><br><p>Møllergata 26</p></div>',
      },
      {
        coords: { lat: 59.9118434, lng: 10.7461162 },
        content:
          '<div class="marker" style="background: url(assets/images/accomodation/room10.jpg) no-repeat center"><h6>Comfort Hotel Karl Johan</h6><br><p>Karl Johans gate 12</p></div>',
      },
      ];

     //Loop Through Markers
    for (var i = 0; i < accomodationMarkers.length; i++) {
      //Add Marker
      addMarker(accomodationMarkers[i]);
    }

    //Add Marker Function
    function addMarker(props) {
      var marker = new google.maps.Marker({
        position: props.coords,
        map: map,
        icon: "https://img.icons8.com/office/40/000000/marker.png",
      });
      if (props.content) {
        var infowindow = new google.maps.InfoWindow({
          content: props.content,
        });

        marker.addListener("click", function () {
          infowindow.open(map, marker);
        });
      }
    }
  });

    // The Activities Locations

  $("#activities").click(function () {
      var oslo = { lat: 59.9114009, lng: 10.7483125 };
       var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 14,
            center: oslo,
        });
    //array of markers

    var activitiesMarkers = [
      {
        coords: { lat: 59.9012828, lng: 10.7524521 },
        content:
          '<div class="marker" style="background: url(assets/images/activities/fun1.jpg) no-repeat center"><h6>Friluftshuset</h6><br><p>Sørengkaia 122</p></div>',
      },
      {
        coords: { lat: 59.9108958, lng: 10.7508731 },
        content:
          '<div class="marker" style="background: url(assets/images/activities/fun2.jpg) no-repeat center"><h6>Oslo Visitor Center</h6><br><p>Jernbanetorget 1</p></div>',
      },
      {
        coords: { lat: 59.9106119, lng: 10.7412764 },
        content:
          '<div class="marker" style="background: url(assets/images/activities/fun3.jpg) no-repeat center"><h6>Viking Biking & Viking Hiking</h6><br><p>Nedre Slottsgate 4</p></div>',
      },
      {
        coords: { lat: 59.9104695, lng: 10.7316016 },
        content:
          '<div class="marker" style="background: url(assets/images/activities/fun4.jpg) no-repeat center"><h6>Norway Yacht Charter</h6><br><p>Rådhusbrygge 3</p></div>',
      },
      {
        coords: { lat: 59.9184768, lng: 10.7588392 },
        content:
          '<div class="marker" style="background: url(assets/images/activities/fun5.jpg) no-repeat center"><h6>Grünerløkka Minigolf Park</h6><br><p>Søndre gate 1</p></div>',
      },
      {
        coords: { lat: 59.9111335, lng: 10.7502324 },
        content:
          '<div class="marker" style="background: url(assets/images/activities/fun6.jpg) no-repeat center"><h6>Free Walking Tours Oslo</h6><br><p>Jernbanetorget 8</p></div>',
      },
      {
        coords: { lat: 59.9074885, lng: 10.7531275 },
        content:
          '<div class="marker" style="background: url(assets/images/activities/fun7.jpg) no-repeat center"><h6>Operahuset Oslo</h6><br><p>Kirsten Flagstads Plass 1</p></div>',
      },
      {
        coords: { lat: 59.907586, lng: 10.7370841 },
        content:
          '<div class="marker" style="background: url(assets/images/activities/fun8.jpg) no-repeat center"><h6>Akershus Festning</h6><br><p>0150 Oslo</p></div>',
      },
      {
        coords: { lat: 59.9077956, lng: 10.7356282 },
        content:
          '<div class="marker" style="background: url(assets/images/activities/fun9.jpg) no-repeat center"><h6>Norway Resistance Museum</h6><br><p>Bygning 21</p></div>',
      },
      {
        coords: { lat: 59.9200554, lng: 10.7475185 },
        content:
          '<div class="marker" style="background: url(assets/images/activities/fun10.jpg) no-repeat center"><h6>Damstredet and Telthusbakken</h6><br><p>Damstredet 4A</p></div>',
      },
      ];

     //Loop Through Markers
    for (var i = 0; i < activitiesMarkers.length; i++) {
      //Add Marker
      addMarker(activitiesMarkers[i]);
    }

    //Add Marker Function
    function addMarker(props) {
      var marker = new google.maps.Marker({
        position: props.coords,
        map: map,
        icon: "https://img.icons8.com/office/40/000000/marker.png",
      });
      if (props.content) {
        var infowindow = new google.maps.InfoWindow({
          content: props.content,
        });

        marker.addListener("click", function () {
          infowindow.open(map, marker);
        });
      }
    }
  });

    // The Parks Locations

  $("#parks").click(function () {
      var oslo = { lat: 59.9177345, lng: 10.7370972 };
       var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 13,
            center: oslo,
        });
    //array of markers

    var parksMarkers = [
      {
        coords: { lat: 59.9264583, lng: 10.7034734 },
        content:
          '<div class="marker" style="background: url(assets/images/parks/parks1.jpg) no-repeat center"><h6>Frognerparken</h6><br><p>Kirkeveien</p></div>',
      },
      {
        coords: { lat: 59.917625, lng: 10.730332 },
        content:
          '<div class="marker" style="background: url(assets/images/parks/parks2.jpg) no-repeat center"><h6>Slottsparken</h6><br><p>Slottsplassen 1</p></div>',
      },
      {
        coords: { lat: 59.927029, lng: 10.700865 },
        content:
          '<div class="marker" style="background: url(assets/images/parks/parks3.jpg) no-repeat center"><h6>Vigelandsparken</h6><br><p>Nobels gate 32</p></div>',
      },
      {
        coords: { lat: 59.8995816, lng: 10.7611578 },
        content:
          '<div class="marker" style="background: url(assets/images/parks/parks4.jpg) no-repeat center"><h6>Ekebergparken Skulpturpark</h6><br><p>Kongsveien 15</p></div>',
      },
      {
        coords: { lat: 59.9063176, lng: 10.7217175 },
        content:
          '<div class="marker" style="background: url(assets/images/parks/parks5.jpg) no-repeat center"><h6>Tjuvholmen Sculpture Park</h6><br><p>Strandpromenaden 2</p></div>',
      },
      {
        coords: { lat: 59.9230071, lng: 10.764023 },
        content:
          '<div class="marker" style="background: url(assets/images/parks/parks6.jpg) no-repeat center"><h6>Sofienberg Park</h6><br><p>Sofienberggata 14</p></div>',
      },
      {
        coords: { lat: 59.9047091, lng: 10.7625675 },
        content:
          '<div class="marker" style="background: url(assets/images/parks/parks7.jpg) no-repeat center"><h6>Middelalderparken</h6><br><p>Sørenga 5</p></div>',
      },
      {
        coords: { lat: 59.9171009, lng: 10.7772202 },
        content:
          '<div class="marker" style="background: url(assets/images/parks/parks8.jpg) no-repeat center"><h6>Tøyen Park</h6><br><p>Helgesens gate 90</p></div>',
      },
      {
        coords: { lat: 59.9147141, lng: 10.734458 },
        content:
          '<div class="marker" style="background: url(assets/images/parks/parks9.jpg) no-repeat center"><h6>Studenterlunden Park</h6><br><p>Johanne Dybwads plass</p></div>',
      },
      {
        coords: { lat: 59.9131819, lng: 10.7570827 },
        content:
          '<div class="marker" style="background: url(assets/images/parks/parks10.jpg) no-repeat center"><h6>Vaterlandsparken</h6><br><p>0186 Oslo</p></div>',
      },
      ];

     //Loop Through Markers
    for (var i = 0; i < parksMarkers.length; i++) {
      //Add Marker
      addMarker(parksMarkers[i]);
    }

    //Add Marker Function
    function addMarker(props) {
      var marker = new google.maps.Marker({
        position: props.coords,
        map: map,
        icon: "https://img.icons8.com/office/40/000000/marker.png",
      });
      if (props.content) {
        var infowindow = new google.maps.InfoWindow({
          content: props.content,
        });

        marker.addListener("click", function () {
          infowindow.open(map, marker);
        });
      }
    }
  });
  
}





/*

  var locations = [
    
   
    {/
    },
    {
    },
    {
    }
  ];

  var markers = locations.map(function (location, i) {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });

  var markerCluster = new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}
function myBarsLocation() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: {
      lat: 59.911491,
      lng: 10.757933,
    },
  });

  var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

  //coffee shops locations

  var locations = [
    {//Eight
      lat: 59.9136839,
      lng: 10.7399639,
    },
    {//Angst
      lat: 59.9139799,
      lng: 10.7487005,
    },
    {//Magic Ice Bar
      lat: 59.9154592,
      lng: 10.737899,
    },
    {// HIMKOK Storgata Destilleri
      lat: 59.9140704,
      lng: 10.7514605,
    },
    {// Aku-Aku Tiki Bar
      lat: 59.9248815,
      lng: 10.7594508,
    },
    {//Last Train
      lat: 59.9147255,
      lng: 10.7365552,
    },
    {// Crow Bar & Brewery
      lat: 59.9171972,
      lng: 10.7534148,
    },
    {// Brewgata
      lat: 59.9140818,
      lng: 10.7552122,
    },
    {// Bar Boca
      lat: 59.9254338,
      lng: 10.759332,
    },
    {// Summit Bar
      lat: 59.9187185,
      lng: 10.7339001,
    }
  ];

  var markers = locations.map(function (location, i) {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });

  var markerCluster = new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}

let restaurants = [
  "A. Den Glade Gris",
  "B. Rorbua Aker Brygge",
  "C. Maaemo",
  "D. Sofies mat og vinhus",
  "E. Restaurant Fjord",
  "F. Rest",
  "G. Arakataka",
  "H. Elias mat & sånt",
  "I. Restaurant Kontrast",
  "J. Hos Thea",
];
let coffeeshops = [
  "A. Espresso House",
  "B. Starbucks",
  "C. Tim Wendelboe",
  "D. Fuglen",
  "E. Stockfleths",
  "F. Hendrix Ibsen",
  "G. Supreme Roastworks AS",
  "H. My ugly baby",
  "I. Java espresso",
  "J. Kaffebrenneriet",
];
let accomodation = [
    "A. Saga Hotel Oslo Central",
    "B. Thon Hotel Rosenkrantz Oslo",
    "C. Central City Apartments",
    "D. Center rooms", 
    "E. Citybox Oslo", 
    "F. Comfort Hotel Xpress Central Station",
    "G. P-Hotel Oslo",
    "H. Saga Hotel Oslo Central",
    "I. Comfort Hotel Xpress Youngstorget",
    "J. Comfort Hotel Karl Johan",
];
let activities = [
    "A. Friluftshuset",
    "B. Oslo Visitor Center",
    "C. Viking Biking & Viking Hiking",
    "D. Norway Yacht Charter", 
    "E. Grünerløkka Minigolf Park", 
    "F. Free Walking Tours Oslo",
    "G. Operahuset Oslo",
    "H. Akershus Festning",
    "I. Norway Resistance Museum",
    "J. Damstredet and Telthusbakken",
];
let parks = [
     "A. Frognerparken",
     "B. Slottsparken",
     "C. Vigelandsparken",
     "D. Ekebergparken Skulpturpark", 
     "E. Tjuvholmen Sculpture Park", 
     "F. Sofienberg Park",
     "G. Middelalderparken",
     "H. Tøyen Park",
     "I. Studenterlunden Park",
     "J. Vaterlandsparken",
];
let bars = [
    "A. Eight",
    "B. Angst",
    "C. Magic Ice Bar",
    "D. HIMKOK Storgata Destilleri", 
    "E. Aku-Aku Tiki Bar", 
    "F. Last Train",
    "G. Crow Bar & Brewery",
    "H. Brewgata",
    "I. Bar Boca",
    "J. Summit Bar",
];

function myRestaurants() {
  var x = document.getElementById("demo");
  x.innerHTML = restaurants.join("<br>");
}
function myCoffee() {
  var x = document.getElementById("demo");
  x.innerHTML = coffeeshops.join("<br>");
}
function myAccomodation(){
      var x = document.getElementById("demo");
      x.innerHTML = accomodation.join("<br>");
}
function myActivities(){
    var x = document.getElementById("demo");
    x.innerHTML = activities.join("<br>");
}
function myParks(){
    var x = document.getElementById("demo");
    x.innerHTML = parks.join("<br>");
}
function myBars(){
    var x = document.getElementById("demo");
    x.innerHTML = bars.join("<br>");
}*/
