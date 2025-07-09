var createTextStyle = function (feature, resolution, labelText, labelFont,
    labelFill, placement, bufferColor,
    bufferWidth) {

    // Don't render text if feature is hidden, no text, or at very high zoom out
    if (feature.hide || !labelText || resolution > 15000) {
        return null;
    }

    if (bufferWidth == 0) {
        var bufferStyle = null;
    } else {
        var bufferStyle = new ol.style.Stroke({
            color: bufferColor,
            width: bufferWidth
        })
    }

    var textStyle = new ol.style.Text({
        font: labelFont || "bold 12px 'Segoe UI', Arial, sans-serif",
        text: labelText,
        textBaseline: "middle",
        textAlign: "center",
        offsetX: 0,
        offsetY: 0,
        placement: placement || 'point',
        maxAngle: 0.1,
        overflow: false,
        declutterMode: 'declutter',
        fill: new ol.style.Fill({
            color: labelFill || "rgba(0, 0, 0, 0.9)"
        }),
        stroke: bufferStyle || new ol.style.Stroke({
            color: "rgba(255, 255, 255, 0.8)",
            width: 3
        }),
        padding: [3, 6, 3, 6]
    });

    return textStyle;
};

function stripe(stripeWidth, gapWidth, angle, color) {
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    canvas.width = screen.width;
    canvas.height = stripeWidth + gapWidth;
    context.fillStyle = color;
    context.lineWidth = stripeWidth;
    context.fillRect(0, 0, canvas.width, stripeWidth);
    innerPattern = context.createPattern(canvas, 'repeat');

    var outerCanvas = document.createElement('canvas');
    var outerContext = outerCanvas.getContext('2d');
    outerCanvas.width = screen.width;
    outerCanvas.height = screen.height;
    outerContext.rotate((Math.PI / 180) * angle);
    outerContext.translate(-(screen.width / 2), -(screen.height / 2));
    outerContext.fillStyle = innerPattern;
    outerContext.fillRect(0, 0, screen.width, screen.height);

    return outerContext.createPattern(outerCanvas, 'no-repeat');
};
