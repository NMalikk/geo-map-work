var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ProvinceLiteracyData_1 = new ol.format.GeoJSON();
var features_ProvinceLiteracyData_1 = format_ProvinceLiteracyData_1.readFeatures(json_ProvinceLiteracyData_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProvinceLiteracyData_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProvinceLiteracyData_1.addFeatures(features_ProvinceLiteracyData_1);
var lyr_ProvinceLiteracyData_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProvinceLiteracyData_1, 
                style: style_ProvinceLiteracyData_1,
                popuplayertitle: 'Province Literacy Data',
                interactive: true,
    title: 'Province Literacy Data<br />\
    <img src="styles/legend/ProvinceLiteracyData_1_0.png" /> 46 - 55.6<br />\
    <img src="styles/legend/ProvinceLiteracyData_1_1.png" /> 55.6 - 60<br />\
    <img src="styles/legend/ProvinceLiteracyData_1_2.png" /> 60 - 64.2<br />\
    <img src="styles/legend/ProvinceLiteracyData_1_3.png" /> 64.2 - 67.4<br />\
    <img src="styles/legend/ProvinceLiteracyData_1_4.png" /> 67.4 - 80<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_ProvinceLiteracyData_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ProvinceLiteracyData_1];
lyr_ProvinceLiteracyData_1.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM1_REF': 'ADM1_REF', 'ADM1ALT1EN': 'ADM1ALT1EN', 'ADM1ALT2EN': 'ADM1ALT2EN', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', 'Literacy': 'Literacy', 'PopupText': 'PopupText', 'literacy_Literacy': 'literacy_Literacy', });
lyr_ProvinceLiteracyData_1.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM1_REF': 'TextEdit', 'ADM1ALT1EN': 'TextEdit', 'ADM1ALT2EN': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', 'Literacy': 'TextEdit', 'PopupText': 'TextEdit', 'literacy_Literacy': 'Range', });
lyr_ProvinceLiteracyData_1.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM1_EN': 'no label', 'ADM1_PCODE': 'no label', 'ADM1_REF': 'no label', 'ADM1ALT1EN': 'no label', 'ADM1ALT2EN': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', 'Literacy': 'header label - visible with data', 'PopupText': 'no label', 'literacy_Literacy': 'no label', });
lyr_ProvinceLiteracyData_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'multiply';
});