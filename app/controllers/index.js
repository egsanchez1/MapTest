 function doClick(e) {
     alert($.label.text);
}
// 
// $.index.open();

// Add in the module
var MapModule = require('ti.map');
var win = Ti.UI.createWindow({backgroundColor: 'white'});
var map1 = MapModule.createView({
    userLocation: true,
    mapType: MapModule.NORMAL_TYPE,
    animate: true,
    region: {latitude: -33.87365, longitude: 151.20689, latitudeDelta: 0.1, longitudeDelta: 0.1 },
    height: Titanium.UI.FILL,
    top: 0,
    left: 0,
    width: Titanium.UI.FILL
});

win.add(map1);
win.open();