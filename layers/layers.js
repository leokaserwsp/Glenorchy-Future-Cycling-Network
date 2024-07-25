var wms_layers = [];


        var lyr_BaseMap_0 = new ol.layer.Tile({
            'title': 'Base Map',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_HobartSuburbs_1 = new ol.format.GeoJSON();
var features_HobartSuburbs_1 = format_HobartSuburbs_1.readFeatures(json_HobartSuburbs_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HobartSuburbs_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HobartSuburbs_1.addFeatures(features_HobartSuburbs_1);
var lyr_HobartSuburbs_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HobartSuburbs_1, 
                style: style_HobartSuburbs_1,
                popuplayertitle: "Hobart Suburbs",
                interactive: true,
                title: 'Hobart Suburbs'
            });
var format_AdditionalNetworkPrimaryCatchments_2 = new ol.format.GeoJSON();
var features_AdditionalNetworkPrimaryCatchments_2 = format_AdditionalNetworkPrimaryCatchments_2.readFeatures(json_AdditionalNetworkPrimaryCatchments_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AdditionalNetworkPrimaryCatchments_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdditionalNetworkPrimaryCatchments_2.addFeatures(features_AdditionalNetworkPrimaryCatchments_2);
var lyr_AdditionalNetworkPrimaryCatchments_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AdditionalNetworkPrimaryCatchments_2, 
                style: style_AdditionalNetworkPrimaryCatchments_2,
                popuplayertitle: "Additional Network - Primary Catchments",
                interactive: true,
                title: '<img src="styles/legend/AdditionalNetworkPrimaryCatchments_2.png" /> Additional Network - Primary Catchments'
            });
var format_GlenorchyLinkImportance_3 = new ol.format.GeoJSON();
var features_GlenorchyLinkImportance_3 = format_GlenorchyLinkImportance_3.readFeatures(json_GlenorchyLinkImportance_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GlenorchyLinkImportance_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GlenorchyLinkImportance_3.addFeatures(features_GlenorchyLinkImportance_3);
var lyr_GlenorchyLinkImportance_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GlenorchyLinkImportance_3, 
                style: style_GlenorchyLinkImportance_3,
                popuplayertitle: "Glenorchy Link Importance",
                interactive: true,
    title: 'Glenorchy Link Importance<br />\
    <img src="styles/legend/GlenorchyLinkImportance_3_0.png" /> Critical Importance<br />\
    <img src="styles/legend/GlenorchyLinkImportance_3_1.png" /> High Importance<br />\
    <img src="styles/legend/GlenorchyLinkImportance_3_2.png" /> Medium Importance<br />\
    <img src="styles/legend/GlenorchyLinkImportance_3_3.png" /> Low Importance<br />'
        });
var format_FutureCycleNetworkbySegment_4 = new ol.format.GeoJSON();
var features_FutureCycleNetworkbySegment_4 = format_FutureCycleNetworkbySegment_4.readFeatures(json_FutureCycleNetworkbySegment_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FutureCycleNetworkbySegment_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FutureCycleNetworkbySegment_4.addFeatures(features_FutureCycleNetworkbySegment_4);
var lyr_FutureCycleNetworkbySegment_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FutureCycleNetworkbySegment_4, 
                style: style_FutureCycleNetworkbySegment_4,
                popuplayertitle: "Future Cycle Network by Segment",
                interactive: true,
    title: 'Future Cycle Network by Segment<br />\
    <img src="styles/legend/FutureCycleNetworkbySegment_4_0.png" /> Primary Route<br />\
    <img src="styles/legend/FutureCycleNetworkbySegment_4_1.png" /> Secondary Route<br />\
    <img src="styles/legend/FutureCycleNetworkbySegment_4_2.png" /> Neighbourhood Route<br />\
    <img src="styles/legend/FutureCycleNetworkbySegment_4_3.png" /> Potential Primary Route<br />\
    <img src="styles/legend/FutureCycleNetworkbySegment_4_4.png" /> Potential Secondary Route<br />'
        });
var format_FutureCycleNetworkProposedForm_5 = new ol.format.GeoJSON();
var features_FutureCycleNetworkProposedForm_5 = format_FutureCycleNetworkProposedForm_5.readFeatures(json_FutureCycleNetworkProposedForm_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FutureCycleNetworkProposedForm_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FutureCycleNetworkProposedForm_5.addFeatures(features_FutureCycleNetworkProposedForm_5);
var lyr_FutureCycleNetworkProposedForm_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FutureCycleNetworkProposedForm_5, 
                style: style_FutureCycleNetworkProposedForm_5,
                popuplayertitle: "Future Cycle Network Proposed Form",
                interactive: true,
    title: 'Future Cycle Network Proposed Form<br />\
    <img src="styles/legend/FutureCycleNetworkProposedForm_5_0.png" /> Painted bicycle lane<br />\
    <img src="styles/legend/FutureCycleNetworkProposedForm_5_1.png" /> Protected bicycle lane<br />\
    <img src="styles/legend/FutureCycleNetworkProposedForm_5_2.png" /> Off-road paths<br />\
    <img src="styles/legend/FutureCycleNetworkProposedForm_5_3.png" /> Local street bikeway<br />'
        });
var format_GlenorchyPointsofInterest_6 = new ol.format.GeoJSON();
var features_GlenorchyPointsofInterest_6 = format_GlenorchyPointsofInterest_6.readFeatures(json_GlenorchyPointsofInterest_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GlenorchyPointsofInterest_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GlenorchyPointsofInterest_6.addFeatures(features_GlenorchyPointsofInterest_6);
var lyr_GlenorchyPointsofInterest_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GlenorchyPointsofInterest_6, 
                style: style_GlenorchyPointsofInterest_6,
                popuplayertitle: "Glenorchy Points of Interest",
                interactive: true,
    title: 'Glenorchy Points of Interest<br />\
    <img src="styles/legend/GlenorchyPointsofInterest_6_0.png" /> Open Space<br />\
    <img src="styles/legend/GlenorchyPointsofInterest_6_1.png" /> Retail<br />\
    <img src="styles/legend/GlenorchyPointsofInterest_6_2.png" /> Primary School<br />\
    <img src="styles/legend/GlenorchyPointsofInterest_6_3.png" /> Other School<br />\
    <img src="styles/legend/GlenorchyPointsofInterest_6_4.png" /> Supermarket<br />\
    <img src="styles/legend/GlenorchyPointsofInterest_6_5.png" /> Tourtist<br />'
        });
var group_ContextLayers = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Context Layers"});

lyr_BaseMap_0.setVisible(true);lyr_HobartSuburbs_1.setVisible(true);lyr_AdditionalNetworkPrimaryCatchments_2.setVisible(true);lyr_GlenorchyLinkImportance_3.setVisible(true);lyr_FutureCycleNetworkbySegment_4.setVisible(true);lyr_FutureCycleNetworkProposedForm_5.setVisible(true);lyr_GlenorchyPointsofInterest_6.setVisible(true);
var layersList = [lyr_BaseMap_0,lyr_HobartSuburbs_1,lyr_AdditionalNetworkPrimaryCatchments_2,lyr_GlenorchyLinkImportance_3,lyr_FutureCycleNetworkbySegment_4,lyr_FutureCycleNetworkProposedForm_5,lyr_GlenorchyPointsofInterest_6];
lyr_HobartSuburbs_1.set('fieldAliases', {'fid': 'fid', 'SSC_CODE16': 'SSC_CODE16', 'SSC_NAME16': 'SSC_NAME16', 'STE_CODE16': 'STE_CODE16', 'STE_NAME16': 'STE_NAME16', 'AREASQKM16': 'AREASQKM16', });
lyr_AdditionalNetworkPrimaryCatchments_2.set('fieldAliases', {'fid': 'fid', 'u': 'u', 'v': 'v', 'key': 'key', 'osmid': 'osmid', 'highway': 'highway', 'oneway': 'oneway', 'reversed': 'reversed', 'length': 'length', 'u_original': 'u_original', 'v_original': 'v_original', 'speed_kph': 'speed_kph', 'grade': 'grade', 'grade_abs': 'grade_abs', 'grade_norm': 'grade_norm', 'weight_metric': 'weight_metric', 'from': 'from', 'to': 'to', 'primary_school_carried_pax': 'primary_school_carried_pax', 'name': 'name', 'lanes': 'lanes', 'maxspeed': 'maxspeed', 'width': 'width', 'service': 'service', 'access': 'access', 'bridge': 'bridge', });
lyr_GlenorchyLinkImportance_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid': 'fid', 'u': 'u', 'v': 'v', 'key': 'key', 'osmid': 'osmid', 'highway': 'highway', 'oneway': 'oneway', 'reversed': 'reversed', 'length': 'length', 'u_original': 'u_original', 'v_original': 'v_original', 'speed_kph': 'speed_kph', 'grade': 'grade', 'grade_abs': 'grade_abs', 'grade_norm': 'grade_norm', 'weight_metric': 'weight_metric', 'from': 'from', 'to': 'to', 'open_space_carried_pax': 'open_space_carried_pax', 'tourist_carried_pax': 'tourist_carried_pax', 'supermarket_carried_pax': 'supermarket_carried_pax', 'retail_carried_pax': 'retail_carried_pax', 'school_carried_pax': 'school_carried_pax', 'retail_carried_pax_norm': 'retail_carried_pax_norm', 'open_space_carried_pax_norm': 'open_space_carried_pax_norm', 'tourist_carried_pax_norm': 'tourist_carried_pax_norm', 'supermarket_carried_pax_norm': 'supermarket_carried_pax_norm', 'school_carried_pax_norm': 'school_carried_pax_norm', 'total_pax_carried': 'total_pax_carried', 'total_pax_carried_norm': 'total_pax_carried_norm', 'lanes': 'lanes', 'width': 'width', 'maxspeed': 'maxspeed', 'ref': 'ref', 'access': 'access', 'tunnel': 'tunnel', 'bridge': 'bridge', });
lyr_FutureCycleNetworkbySegment_4.set('fieldAliases', {'fid': 'fid', 'Hierarchy': 'Hierarchy', 'Road Name': 'Road Name', 'Start': 'Start', 'End': 'End', 'Road Hierarchy': 'Road Hierarchy', 'Proposed Form': 'Proposed Form', 'Length (m)': 'Length (m)', 'Route_ID': 'Route_ID', 'Carriageway Width (m)': 'Carriageway Width (m)', 'Speed Limit': 'Speed Limit', 'Ave Daily Traffic Vol': 'Ave Daily Traffic Vol', 'Route Name': 'Route Name', 'Route Number': 'Route Number', });
lyr_FutureCycleNetworkProposedForm_5.set('fieldAliases', {'fid': 'fid', 'Hierarchy': 'Hierarchy', 'Road Name': 'Road Name', 'Start': 'Start', 'End': 'End', 'Road Hierarchy': 'Road Hierarchy', 'Proposed Form': 'Proposed Form', 'Length (m)': 'Length (m)', 'Route_ID': 'Route_ID', 'Carriageway Width (m)': 'Carriageway Width (m)', 'Speed Limit': 'Speed Limit', 'Ave Daily Traffic Vol': 'Ave Daily Traffic Vol', 'Route Name': 'Route Name', 'Route Number': 'Route Number', });
lyr_GlenorchyPointsofInterest_6.set('fieldAliases', {'fid': 'fid', 'place_type': 'place_type', 'place_name': 'place_name', 'place_subtype': 'place_subtype', });
lyr_HobartSuburbs_1.set('fieldImages', {'fid': 'TextEdit', 'SSC_CODE16': 'TextEdit', 'SSC_NAME16': 'TextEdit', 'STE_CODE16': 'TextEdit', 'STE_NAME16': 'TextEdit', 'AREASQKM16': 'TextEdit', });
lyr_AdditionalNetworkPrimaryCatchments_2.set('fieldImages', {'fid': 'TextEdit', 'u': 'TextEdit', 'v': 'TextEdit', 'key': 'TextEdit', 'osmid': 'TextEdit', 'highway': 'TextEdit', 'oneway': 'CheckBox', 'reversed': 'TextEdit', 'length': 'TextEdit', 'u_original': 'TextEdit', 'v_original': 'TextEdit', 'speed_kph': 'TextEdit', 'grade': 'TextEdit', 'grade_abs': 'TextEdit', 'grade_norm': 'TextEdit', 'weight_metric': 'TextEdit', 'from': 'TextEdit', 'to': 'TextEdit', 'primary_school_carried_pax': 'TextEdit', 'name': 'TextEdit', 'lanes': 'TextEdit', 'maxspeed': 'TextEdit', 'width': 'TextEdit', 'service': 'TextEdit', 'access': 'TextEdit', 'bridge': 'TextEdit', });
lyr_GlenorchyLinkImportance_3.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'fid': 'TextEdit', 'u': 'TextEdit', 'v': 'TextEdit', 'key': 'TextEdit', 'osmid': 'TextEdit', 'highway': 'TextEdit', 'oneway': 'CheckBox', 'reversed': 'TextEdit', 'length': 'TextEdit', 'u_original': 'TextEdit', 'v_original': 'TextEdit', 'speed_kph': 'TextEdit', 'grade': 'TextEdit', 'grade_abs': 'TextEdit', 'grade_norm': 'TextEdit', 'weight_metric': 'TextEdit', 'from': 'TextEdit', 'to': 'TextEdit', 'open_space_carried_pax': 'TextEdit', 'tourist_carried_pax': 'TextEdit', 'supermarket_carried_pax': 'TextEdit', 'retail_carried_pax': 'TextEdit', 'school_carried_pax': 'TextEdit', 'retail_carried_pax_norm': 'TextEdit', 'open_space_carried_pax_norm': 'TextEdit', 'tourist_carried_pax_norm': 'TextEdit', 'supermarket_carried_pax_norm': 'TextEdit', 'school_carried_pax_norm': 'TextEdit', 'total_pax_carried': 'TextEdit', 'total_pax_carried_norm': 'TextEdit', 'lanes': 'TextEdit', 'width': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'access': 'TextEdit', 'tunnel': 'TextEdit', 'bridge': 'TextEdit', });
lyr_FutureCycleNetworkbySegment_4.set('fieldImages', {'fid': 'TextEdit', 'Hierarchy': 'TextEdit', 'Road Name': 'TextEdit', 'Start': 'TextEdit', 'End': 'TextEdit', 'Road Hierarchy': 'TextEdit', 'Proposed Form': 'TextEdit', 'Length (m)': 'Range', 'Route_ID': 'TextEdit', 'Carriageway Width (m)': 'Range', 'Speed Limit': 'Range', 'Ave Daily Traffic Vol': 'Range', 'Route Name': 'TextEdit', 'Route Number': 'Range', });
lyr_FutureCycleNetworkProposedForm_5.set('fieldImages', {'fid': 'TextEdit', 'Hierarchy': 'TextEdit', 'Road Name': 'TextEdit', 'Start': 'TextEdit', 'End': 'TextEdit', 'Road Hierarchy': 'TextEdit', 'Proposed Form': 'TextEdit', 'Length (m)': 'Range', 'Route_ID': 'TextEdit', 'Carriageway Width (m)': 'Range', 'Speed Limit': 'Range', 'Ave Daily Traffic Vol': 'Range', 'Route Name': 'TextEdit', 'Route Number': 'Range', });
lyr_GlenorchyPointsofInterest_6.set('fieldImages', {'fid': 'TextEdit', 'place_type': 'TextEdit', 'place_name': 'TextEdit', 'place_subtype': 'TextEdit', });
lyr_HobartSuburbs_1.set('fieldLabels', {'fid': 'no label', 'SSC_CODE16': 'no label', 'SSC_NAME16': 'no label', 'STE_CODE16': 'no label', 'STE_NAME16': 'no label', 'AREASQKM16': 'no label', });
lyr_AdditionalNetworkPrimaryCatchments_2.set('fieldLabels', {'fid': 'no label', 'u': 'no label', 'v': 'no label', 'key': 'no label', 'osmid': 'no label', 'highway': 'no label', 'oneway': 'no label', 'reversed': 'no label', 'length': 'no label', 'u_original': 'no label', 'v_original': 'no label', 'speed_kph': 'no label', 'grade': 'no label', 'grade_abs': 'no label', 'grade_norm': 'no label', 'weight_metric': 'no label', 'from': 'no label', 'to': 'no label', 'primary_school_carried_pax': 'no label', 'name': 'no label', 'lanes': 'no label', 'maxspeed': 'no label', 'width': 'no label', 'service': 'no label', 'access': 'no label', 'bridge': 'no label', });
lyr_GlenorchyLinkImportance_3.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'fid': 'no label', 'u': 'no label', 'v': 'no label', 'key': 'no label', 'osmid': 'no label', 'highway': 'no label', 'oneway': 'no label', 'reversed': 'no label', 'length': 'no label', 'u_original': 'no label', 'v_original': 'no label', 'speed_kph': 'no label', 'grade': 'no label', 'grade_abs': 'no label', 'grade_norm': 'no label', 'weight_metric': 'no label', 'from': 'no label', 'to': 'no label', 'open_space_carried_pax': 'no label', 'tourist_carried_pax': 'no label', 'supermarket_carried_pax': 'no label', 'retail_carried_pax': 'no label', 'school_carried_pax': 'no label', 'retail_carried_pax_norm': 'no label', 'open_space_carried_pax_norm': 'no label', 'tourist_carried_pax_norm': 'no label', 'supermarket_carried_pax_norm': 'no label', 'school_carried_pax_norm': 'no label', 'total_pax_carried': 'no label', 'total_pax_carried_norm': 'no label', 'lanes': 'no label', 'width': 'no label', 'maxspeed': 'no label', 'ref': 'no label', 'access': 'no label', 'tunnel': 'no label', 'bridge': 'no label', });
lyr_FutureCycleNetworkbySegment_4.set('fieldLabels', {'fid': 'hidden field', 'Hierarchy': 'inline label - always visible', 'Road Name': 'inline label - always visible', 'Start': 'inline label - always visible', 'End': 'inline label - always visible', 'Road Hierarchy': 'inline label - always visible', 'Proposed Form': 'hidden field', 'Length (m)': 'inline label - always visible', 'Route_ID': 'inline label - always visible', 'Carriageway Width (m)': 'hidden field', 'Speed Limit': 'hidden field', 'Ave Daily Traffic Vol': 'hidden field', 'Route Name': 'inline label - always visible', 'Route Number': 'inline label - always visible', });
lyr_FutureCycleNetworkProposedForm_5.set('fieldLabels', {'fid': 'hidden field', 'Hierarchy': 'inline label - always visible', 'Road Name': 'inline label - always visible', 'Start': 'inline label - always visible', 'End': 'inline label - always visible', 'Road Hierarchy': 'inline label - always visible', 'Proposed Form': 'inline label - always visible', 'Length (m)': 'inline label - always visible', 'Route_ID': 'inline label - always visible', 'Carriageway Width (m)': 'hidden field', 'Speed Limit': 'hidden field', 'Ave Daily Traffic Vol': 'hidden field', 'Route Name': 'inline label - always visible', 'Route Number': 'inline label - always visible', });
lyr_GlenorchyPointsofInterest_6.set('fieldLabels', {'fid': 'hidden field', 'place_type': 'hidden field', 'place_name': 'inline label - always visible', 'place_subtype': 'inline label - visible with data', });
lyr_GlenorchyPointsofInterest_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});