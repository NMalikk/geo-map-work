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
                declutter: true,
                source:jsonSource_ProvinceLiteracyData_1, 
                style: style_ProvinceLiteracyData_1,
                popuplayertitle: '',
                interactive: true,
    title: 'Province Literacy Data<br />\
    <img src="styles/legend/ProvinceLiteracyData_1_0.png" /> 46 - 55.6<br />\
    <img src="styles/legend/ProvinceLiteracyData_1_1.png" /> 55.6 - 60<br />\
    <img src="styles/legend/ProvinceLiteracyData_1_2.png" /> 60 - 64.2<br />\
    <img src="styles/legend/ProvinceLiteracyData_1_3.png" /> 64.2 - 67.4<br />\
    <img src="styles/legend/ProvinceLiteracyData_1_4.png" /> 67.4 - 80<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_ProvinceLiteracyData_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ProvinceLiteracyData_1];
lyr_ProvinceLiteracyData_1.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM1_EN': 'Province', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM1_REF': 'ADM1_REF', 'ADM1ALT1EN': 'ADM1ALT1EN', 'ADM1ALT2EN': 'ADM1ALT2EN', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', 'Literacy': 'Literacy Rate', 'PopupText': 'PopupText', 'literacy_Literacy': 'literacy_Literacy', });
lyr_ProvinceLiteracyData_1.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM1_REF': 'TextEdit', 'ADM1ALT1EN': 'TextEdit', 'ADM1ALT2EN': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', 'Literacy': 'TextEdit', 'PopupText': 'TextEdit', 'literacy_Literacy': 'Range', });
lyr_ProvinceLiteracyData_1.set('fieldLabels', {'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'ADM1_EN': 'header label - visible with data', 'ADM1_PCODE': 'hidden field', 'ADM1_REF': 'hidden field', 'ADM1ALT1EN': 'hidden field', 'ADM1ALT2EN': 'hidden field', 'ADM0_EN': 'hidden field', 'ADM0_PCODE': 'hidden field', 'date': 'hidden field', 'validOn': 'hidden field', 'validTo': 'hidden field', 'Literacy': 'header label - visible with data', 'PopupText': 'hidden field', 'literacy_Literacy': 'hidden field', });
lyr_ProvinceLiteracyData_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'multiply';
});