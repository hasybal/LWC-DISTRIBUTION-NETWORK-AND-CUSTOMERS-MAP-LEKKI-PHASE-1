var size = 0;
var placement = 'point';

var style_ACTIVECUSTOMERS_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("");
    var labelFont = "13.0px \'Arial\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "#ffe627";
    var bufferWidth = 0.5;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("CustRef") !== null) {
        labelText = String(feature.get("CustRef"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,231,15,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 4.787999999999999}),fill: new ol.style.Fill({color: 'rgba(225,89,137,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
