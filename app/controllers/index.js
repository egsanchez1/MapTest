 function doClick(e) {
     alert($.label.text);
}
// 
// $.index.open();

// Add in the module
var MapModule = require('ti.map');
var win = Ti.UI.createWindow({backgroundColor: 'white'});

//believe this enables the app to find the location of the device
Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
 
//
//  Sets the distance filter
//Dictates how often an event fires based on the distance the device moves
//  this value is in meters
//
Titanium.Geolocation.distanceFilter = 10;

Titanium.Geolocation.getCurrentPosition(function(e)
{
    if (e.error)
    {
        alert('Cannot get your current location');
        return;
    }
 
    var longitude = e.coords.longitude;
    var latitude = e.coords.latitude;
    var altitude = e.coords.altitude;
    var heading = e.coords.heading;
    var accuracy = e.coords.accuracy;
    var speed = e.coords.speed;
    var timestamp = e.coords.timestamp;
    var altitudeAccuracy = e.coords.altitudeAccuracy;

var opera = MapModule.createAnnotation({
    latitude: 35.13314,
    longitude: -101.897468,
    title: 'Valero Energy',
    subtitle: '7201 CANYON DR, Amarillo,TX'
});
var bridge = MapModule.createAnnotation({
    latitude: 35.221803,
    longitude: -101.848697,
    pincolor: MapModule.ANNOTATION_AZURE,
 // Even though we are creating a button, it does not respond to Button events or animates.
 // Use the Map View's click event and monitor the clicksource property for 'leftPane'.
    leftView: Ti.UI.createButton({title: 'Detail'}),
 // For eventing, use the Map View's click event
 // and monitor the clicksource property for 'rightPane'.
    rightButton: 'appicon.jpg',    
    title: '1425 UNIVERSITY NE/',
    subtitle: 'Valero Station, Amarillo,TX'
});

//creates map - Nhat/Ez
var map1 = MapModule.createView({
    userLocation: true,
    mapType: MapModule.NORMAL_TYPE,
    animate: true,
    region: {latitude: latitude, longitude: longitude, latitudeDelta: 0.1, longitudeDelta: 0.1 },
    // latitude: 35.13314, longitude: -101.897468
    height: Titanium.UI.FILL,
    width: Titanium.UI.FILL,
	annotations:[bridge,opera]
});






win.add(map1);
win.open();
});



// 
// 
// var MapModule = require('ti.map');
// var win = Ti.UI.createWindow({backgroundColor: 'white'});
// var opera = MapModule.createAnnotation({
    // latitude: -33.8569,
    // longitude: 151.2153,
    // title: 'Sydney Opera House',
    // subtitle: 'Sydney, New South Wales, Australia'
// });
// var bridge = MapModule.createAnnotation({
    // latitude: -33.852222,
    // longitude: 151.210556,
    // pincolor: MapModule.ANNOTATION_AZURE,
 // // Even though we are creating a button, it does not respond to Button events or animates.
 // // Use the Map View's click event and monitor the clicksource property for 'leftPane'.
    // leftView: Ti.UI.createButton({title: 'Detail'}),
 // // For eventing, use the Map View's click event
 // // and monitor the clicksource property for 'rightPane'.
    // rightButton: 'appicon.jpg',    
    // title: 'Sydney Harbour Bridge',
    // subtitle: 'Port Jackson'
// });
// var random = MapModule.createAnnotation({
    // latitude: -33.87365,
    // longitude: 151.20689,
    // pincolor: MapModule.ANNOTATION_VIOLET,
 // // Even though we are creating a label, it does not respond to Label events.
 // // Use the Map View's events instead.    
    // customView: Ti.UI.createLabel({
        // text: 'MOVE ME!',
        // opacity: '80%',
        // color: 'red',
        // backgroundColor: 'gray',
        // font: {
            // fontSize: '16dp',
            // fontWeight: 'bold'
        // }
    // }),
    // draggable: true
// });
// var mapview = MapModule.createView({
    // mapType: MapModule.NORMAL_TYPE,
    // region: {latitude: -33.87365, longitude: 151.20689, latitudeDelta: 0.1, longitudeDelta: 0.1 },
    // annotations: [bridge,opera] //< add these annotations upon creation
// });
// // Add this annotation after creation
// mapview.addAnnotation(random);
// win.add(mapview);
// win.open();