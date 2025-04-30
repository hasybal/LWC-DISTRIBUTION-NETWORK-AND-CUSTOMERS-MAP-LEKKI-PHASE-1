var wms_layers = [];


        var lyr_googlehybrid_0 = new ol.layer.Tile({
            'title': 'google hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_ACTIVECUSTOMERS_1 = new ol.format.GeoJSON();
var features_ACTIVECUSTOMERS_1 = format_ACTIVECUSTOMERS_1.readFeatures(json_ACTIVECUSTOMERS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ACTIVECUSTOMERS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ACTIVECUSTOMERS_1.addFeatures(features_ACTIVECUSTOMERS_1);
var lyr_ACTIVECUSTOMERS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ACTIVECUSTOMERS_1, 
                style: style_ACTIVECUSTOMERS_1,
                popuplayertitle: 'ACTIVE CUSTOMERS',
                interactive: true,
                title: '<img src="styles/legend/ACTIVECUSTOMERS_1.png" /> ACTIVE CUSTOMERS'
            });
var format_100mm_2 = new ol.format.GeoJSON();
var features_100mm_2 = format_100mm_2.readFeatures(json_100mm_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_100mm_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_100mm_2.addFeatures(features_100mm_2);
var lyr_100mm_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_100mm_2, 
                style: style_100mm_2,
                popuplayertitle: '100mm',
                interactive: true,
                title: '<img src="styles/legend/100mm_2.png" /> 100mm'
            });
var format_150mm_3 = new ol.format.GeoJSON();
var features_150mm_3 = format_150mm_3.readFeatures(json_150mm_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_150mm_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_150mm_3.addFeatures(features_150mm_3);
var lyr_150mm_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_150mm_3, 
                style: style_150mm_3,
                popuplayertitle: '150mm',
                interactive: true,
                title: '<img src="styles/legend/150mm_3.png" /> 150mm'
            });
var format_200mm_4 = new ol.format.GeoJSON();
var features_200mm_4 = format_200mm_4.readFeatures(json_200mm_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_200mm_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_200mm_4.addFeatures(features_200mm_4);
var lyr_200mm_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_200mm_4, 
                style: style_200mm_4,
                popuplayertitle: '200mm',
                interactive: true,
                title: '<img src="styles/legend/200mm_4.png" /> 200mm'
            });
var format_300mm_5 = new ol.format.GeoJSON();
var features_300mm_5 = format_300mm_5.readFeatures(json_300mm_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_300mm_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_300mm_5.addFeatures(features_300mm_5);
var lyr_300mm_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_300mm_5, 
                style: style_300mm_5,
                popuplayertitle: '300mm',
                interactive: true,
                title: '<img src="styles/legend/300mm_5.png" /> 300mm'
            });
var format_phase1rd_6 = new ol.format.GeoJSON();
var features_phase1rd_6 = format_phase1rd_6.readFeatures(json_phase1rd_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_phase1rd_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_phase1rd_6.addFeatures(features_phase1rd_6);
var lyr_phase1rd_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_phase1rd_6, 
                style: style_phase1rd_6,
                popuplayertitle: 'phase 1 rd',
                interactive: false,
                title: '<img src="styles/legend/phase1rd_6.png" /> phase 1 rd'
            });
var format_phase1boundary_7 = new ol.format.GeoJSON();
var features_phase1boundary_7 = format_phase1boundary_7.readFeatures(json_phase1boundary_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_phase1boundary_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_phase1boundary_7.addFeatures(features_phase1boundary_7);
var lyr_phase1boundary_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_phase1boundary_7, 
                style: style_phase1boundary_7,
                popuplayertitle: 'phase 1 boundary',
                interactive: false,
                title: '<img src="styles/legend/phase1boundary_7.png" /> phase 1 boundary'
            });
var format_LEKKIWATERWORKS_8 = new ol.format.GeoJSON();
var features_LEKKIWATERWORKS_8 = format_LEKKIWATERWORKS_8.readFeatures(json_LEKKIWATERWORKS_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LEKKIWATERWORKS_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LEKKIWATERWORKS_8.addFeatures(features_LEKKIWATERWORKS_8);
var lyr_LEKKIWATERWORKS_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LEKKIWATERWORKS_8, 
                style: style_LEKKIWATERWORKS_8,
                popuplayertitle: 'LEKKI WATER WORKS',
                interactive: false,
                title: '<img src="styles/legend/LEKKIWATERWORKS_8.png" /> LEKKI WATER WORKS'
            });
var group_lekki = new ol.layer.Group({
                                layers: [lyr_phase1rd_6,lyr_phase1boundary_7,lyr_LEKKIWATERWORKS_8,],
                                fold: "open",
                                title: 'lekki'});
var group_PIPESIZES = new ol.layer.Group({
                                layers: [lyr_100mm_2,lyr_150mm_3,lyr_200mm_4,lyr_300mm_5,],
                                fold: "open",
                                title: 'PIPE SIZES'});
var group_CUSTOMERDATA = new ol.layer.Group({
                                layers: [lyr_ACTIVECUSTOMERS_1,],
                                fold: "open",
                                title: 'CUSTOMER DATA'});

lyr_googlehybrid_0.setVisible(true);lyr_ACTIVECUSTOMERS_1.setVisible(true);lyr_100mm_2.setVisible(true);lyr_150mm_3.setVisible(true);lyr_200mm_4.setVisible(true);lyr_300mm_5.setVisible(true);lyr_phase1rd_6.setVisible(true);lyr_phase1boundary_7.setVisible(true);lyr_LEKKIWATERWORKS_8.setVisible(true);
var layersList = [lyr_googlehybrid_0,group_CUSTOMERDATA,group_PIPESIZES,group_lekki];
lyr_ACTIVECUSTOMERS_1.set('fieldAliases', {'id': 'id', 'NO': 'NO', 'ZoneName': 'ZoneName', 'PropertyRe': 'PropertyRe', 'CustRef': 'CustRef', 'Name': 'Name', 'CustomerTy': 'CustomerTy', 'PrevReadin': 'PrevReadin', 'CurReading': 'CurReading', 'Consumptio': 'Consumptio', 'BillTarrif': 'BillTarrif', 'BILL_UNIT': 'BILL_UNIT', 'Tarrif': 'Tarrif', 'BalanceBF': 'BalanceBF', 'CreditAdju': 'CreditAdju', 'DebitAdjus': 'DebitAdjus', 'Payments': 'Payments', 'BillAmount': 'BillAmount', 'ClosingBal': 'ClosingBal', 'STREETNAMM': 'STREETNAMM', 'STREEETCOD': 'STREEETCOD', });
lyr_100mm_2.set('fieldAliases', {'id': 'id', 'Material': 'Material', 'L': 'L', 'main': 'main', 'DIAMETER': 'DIAMETER', 'LENGTH_(m)': 'LENGTH_(m)', 'YEAR INST': 'YEAR INST', 'LABEL': 'LABEL', 'START NODE': 'START NODE', 'STOP NODE': 'STOP NODE', 'X1_(m)': 'X1_(m)', 'Y1_(m)': 'Y1_(m)', 'X2_(m)': 'X2_(m)', 'Y2_(m)': 'Y2_(m)', });
lyr_150mm_3.set('fieldAliases', {'id': 'id', 'Material': 'Material', 'L': 'L', 'main': 'main', 'DIAMETER': 'DIAMETER', 'LENGTH_(m)': 'LENGTH_(m)', 'YEAR INST': 'YEAR INST', 'LABEL': 'LABEL', 'START NODE': 'START NODE', 'STOP NODE': 'STOP NODE', 'X1_(m)': 'X1_(m)', 'Y1_(m)': 'Y1_(m)', 'X2_(m)': 'X2_(m)', 'Y2_(m)': 'Y2_(m)', });
lyr_200mm_4.set('fieldAliases', {'id': 'id', 'Material': 'Material', 'L': 'L', 'main': 'main', 'DIAMETER': 'DIAMETER', 'LENGTH_(m)': 'LENGTH_(m)', 'YEAR INST': 'YEAR INST', 'LABEL': 'LABEL', 'START NODE': 'START NODE', 'STOP NODE': 'STOP NODE', 'X1_(m)': 'X1_(m)', 'Y1_(m)': 'Y1_(m)', 'X2_(m)': 'X2_(m)', 'Y2_(m)': 'Y2_(m)', });
lyr_300mm_5.set('fieldAliases', {'id': 'id', 'Material': 'Material', 'L': 'L', 'main': 'main', 'DIAMETER': 'DIAMETER', 'LENGTH_(m)': 'LENGTH_(m)', 'LABEL': 'LABEL', 'START NODE': 'START NODE', 'STOP NODE': 'STOP NODE', 'X1_(m)': 'X1_(m)', 'Y1_(m)': 'Y1_(m)', 'X2_(m)': 'X2_(m)', 'Y2_(m)': 'Y2_(m)', });
lyr_phase1rd_6.set('fieldAliases', {'full_id': 'full_id', 'old_name': 'old_name', 'oneway': 'oneway', 'name': 'name', 'alt_name': 'alt_name', 'LENGTH': 'LENGTH', });
lyr_phase1boundary_7.set('fieldAliases', {'FID': 'FID', 'AREA': 'AREA', });
lyr_LEKKIWATERWORKS_8.set('fieldAliases', {'FID_': 'FID_', 'Entity': 'Entity', 'Layer': 'Layer', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', });
lyr_ACTIVECUSTOMERS_1.set('fieldImages', {'id': 'TextEdit', 'NO': 'TextEdit', 'ZoneName': 'TextEdit', 'PropertyRe': 'TextEdit', 'CustRef': 'TextEdit', 'Name': 'TextEdit', 'CustomerTy': 'TextEdit', 'PrevReadin': 'TextEdit', 'CurReading': 'TextEdit', 'Consumptio': 'TextEdit', 'BillTarrif': 'TextEdit', 'BILL_UNIT': 'TextEdit', 'Tarrif': 'TextEdit', 'BalanceBF': 'TextEdit', 'CreditAdju': 'TextEdit', 'DebitAdjus': 'TextEdit', 'Payments': 'TextEdit', 'BillAmount': 'TextEdit', 'ClosingBal': 'TextEdit', 'STREETNAMM': 'TextEdit', 'STREEETCOD': 'TextEdit', });
lyr_100mm_2.set('fieldImages', {'id': 'TextEdit', 'Material': 'TextEdit', 'L': 'TextEdit', 'main': 'TextEdit', 'DIAMETER': 'TextEdit', 'LENGTH_(m)': 'TextEdit', 'YEAR INST': 'TextEdit', 'LABEL': 'TextEdit', 'START NODE': 'TextEdit', 'STOP NODE': 'TextEdit', 'X1_(m)': 'TextEdit', 'Y1_(m)': 'TextEdit', 'X2_(m)': 'TextEdit', 'Y2_(m)': 'TextEdit', });
lyr_150mm_3.set('fieldImages', {'id': 'TextEdit', 'Material': 'TextEdit', 'L': 'TextEdit', 'main': 'TextEdit', 'DIAMETER': 'TextEdit', 'LENGTH_(m)': 'TextEdit', 'YEAR INST': 'TextEdit', 'LABEL': 'TextEdit', 'START NODE': 'TextEdit', 'STOP NODE': 'TextEdit', 'X1_(m)': 'TextEdit', 'Y1_(m)': 'TextEdit', 'X2_(m)': 'TextEdit', 'Y2_(m)': 'TextEdit', });
lyr_200mm_4.set('fieldImages', {'id': 'TextEdit', 'Material': 'TextEdit', 'L': 'TextEdit', 'main': 'TextEdit', 'DIAMETER': 'TextEdit', 'LENGTH_(m)': 'TextEdit', 'YEAR INST': 'TextEdit', 'LABEL': 'TextEdit', 'START NODE': 'TextEdit', 'STOP NODE': 'TextEdit', 'X1_(m)': 'TextEdit', 'Y1_(m)': 'TextEdit', 'X2_(m)': 'TextEdit', 'Y2_(m)': 'TextEdit', });
lyr_300mm_5.set('fieldImages', {'id': 'TextEdit', 'Material': 'TextEdit', 'L': 'TextEdit', 'main': 'TextEdit', 'DIAMETER': 'TextEdit', 'LENGTH_(m)': 'TextEdit', 'LABEL': 'TextEdit', 'START NODE': 'TextEdit', 'STOP NODE': 'TextEdit', 'X1_(m)': 'TextEdit', 'Y1_(m)': 'TextEdit', 'X2_(m)': 'TextEdit', 'Y2_(m)': 'TextEdit', });
lyr_phase1rd_6.set('fieldImages', {'full_id': 'TextEdit', 'old_name': 'TextEdit', 'oneway': 'TextEdit', 'name': 'TextEdit', 'alt_name': 'TextEdit', 'LENGTH': 'TextEdit', });
lyr_phase1boundary_7.set('fieldImages', {'FID': 'TextEdit', 'AREA': 'TextEdit', });
lyr_LEKKIWATERWORKS_8.set('fieldImages', {'FID_': 'TextEdit', 'Entity': 'TextEdit', 'Layer': 'TextEdit', 'Color': 'TextEdit', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'TextEdit', 'RefName': 'TextEdit', });
lyr_ACTIVECUSTOMERS_1.set('fieldLabels', {'id': 'hidden field', 'NO': 'hidden field', 'ZoneName': 'inline label - always visible', 'PropertyRe': 'inline label - always visible', 'CustRef': 'inline label - always visible', 'Name': 'inline label - always visible', 'CustomerTy': 'inline label - always visible', 'PrevReadin': 'inline label - always visible', 'CurReading': 'inline label - always visible', 'Consumptio': 'inline label - always visible', 'BillTarrif': 'inline label - always visible', 'BILL_UNIT': 'inline label - always visible', 'Tarrif': 'inline label - always visible', 'BalanceBF': 'inline label - always visible', 'CreditAdju': 'inline label - always visible', 'DebitAdjus': 'inline label - always visible', 'Payments': 'inline label - always visible', 'BillAmount': 'hidden field', 'ClosingBal': 'hidden field', 'STREETNAMM': 'inline label - always visible', 'STREEETCOD': 'inline label - always visible', });
lyr_100mm_2.set('fieldLabels', {'id': 'hidden field', 'Material': 'inline label - always visible', 'L': 'hidden field', 'main': 'hidden field', 'DIAMETER': 'inline label - always visible', 'LENGTH_(m)': 'inline label - always visible', 'YEAR INST': 'inline label - always visible', 'LABEL': 'inline label - always visible', 'START NODE': 'inline label - always visible', 'STOP NODE': 'inline label - always visible', 'X1_(m)': 'hidden field', 'Y1_(m)': 'hidden field', 'X2_(m)': 'hidden field', 'Y2_(m)': 'hidden field', });
lyr_150mm_3.set('fieldLabels', {'id': 'hidden field', 'Material': 'inline label - always visible', 'L': 'hidden field', 'main': 'hidden field', 'DIAMETER': 'inline label - visible with data', 'LENGTH_(m)': 'inline label - visible with data', 'YEAR INST': 'inline label - visible with data', 'LABEL': 'inline label - visible with data', 'START NODE': 'inline label - visible with data', 'STOP NODE': 'inline label - visible with data', 'X1_(m)': 'hidden field', 'Y1_(m)': 'hidden field', 'X2_(m)': 'hidden field', 'Y2_(m)': 'hidden field', });
lyr_200mm_4.set('fieldLabels', {'id': 'hidden field', 'Material': 'inline label - always visible', 'L': 'hidden field', 'main': 'hidden field', 'DIAMETER': 'inline label - always visible', 'LENGTH_(m)': 'inline label - always visible', 'YEAR INST': 'inline label - always visible', 'LABEL': 'inline label - always visible', 'START NODE': 'inline label - always visible', 'STOP NODE': 'inline label - always visible', 'X1_(m)': 'hidden field', 'Y1_(m)': 'hidden field', 'X2_(m)': 'hidden field', 'Y2_(m)': 'hidden field', });
lyr_300mm_5.set('fieldLabels', {'id': 'hidden field', 'Material': 'inline label - visible with data', 'L': 'hidden field', 'main': 'hidden field', 'DIAMETER': 'inline label - visible with data', 'LENGTH_(m)': 'inline label - visible with data', 'LABEL': 'inline label - visible with data', 'START NODE': 'inline label - visible with data', 'STOP NODE': 'inline label - visible with data', 'X1_(m)': 'hidden field', 'Y1_(m)': 'hidden field', 'X2_(m)': 'hidden field', 'Y2_(m)': 'hidden field', });
lyr_phase1rd_6.set('fieldLabels', {'full_id': 'no label', 'old_name': 'no label', 'oneway': 'no label', 'name': 'no label', 'alt_name': 'no label', 'LENGTH': 'no label', });
lyr_phase1boundary_7.set('fieldLabels', {'FID': 'no label', 'AREA': 'no label', });
lyr_LEKKIWATERWORKS_8.set('fieldLabels', {'FID_': 'no label', 'Entity': 'no label', 'Layer': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', });
lyr_LEKKIWATERWORKS_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});