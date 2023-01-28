function initialize() {
        var myOptions = {
          center: new google.maps.LatLng(40.71435, -74.00597),
          zoom: 17,
          mapTypeId: google.maps.MapTypeId.ROADMAP
          };
          var map = new google.maps.Map(document.getElementById("googleMap"),myOptions);
}
       
window.onload = initialize;