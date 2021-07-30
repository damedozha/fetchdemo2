let map
let currentPosition = {}

navigator.geolocation.getCurrentPosition(success, error)

function success(position){
    console.log("success")
    setCurrentPosition(position.coords)
}

function error(){
    console.log("Error")
}

function setCurrentPosition(pos){
    currentPosition = pos
}

function initMap(){
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 32.9033131, lng: -96.92230149999999  },
    zoom: 8,
  });
}
