var size = 0;
var placement = 'point';
function categories_FutureCycleNetworkbySegment_4(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Primary Route':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(1,94,255,0.75)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Secondary Route':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(47,226,254,0.75)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Neighbourhood Route':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(115,236,78,0.75)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Dashed Primary Route':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(1,94,255,0.75)', lineDash: [3.8,7.6], lineCap: 'square', lineJoin: 'bevel', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Dashed Secondary Route':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(47,226,254,0.75)', lineDash: [3.8,7.6], lineCap: 'square', lineJoin: 'bevel', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_FutureCycleNetworkbySegment_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Hierarchy");
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_FutureCycleNetworkbySegment_4(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
