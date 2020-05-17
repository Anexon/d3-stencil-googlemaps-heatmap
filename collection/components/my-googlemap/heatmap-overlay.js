import { select } from 'd3-selection';
import { map } from 'd3-collection';
export class HeatmapOverlay {
    constructor(data) {
        this.data = data;
    }
    onAdd(googleMap, overlay) {
        this.googleMap = googleMap;
        this.overlay = overlay;
        this.mapBounds = this.googleMap.getBounds();
        let canvas = select(this.overlay.getPanes().overlayLayer)
            .append('canvas')
            .style('position', 'absolute')
            .style('left', `-${this.googleMap.getDiv().offsetWidth / 2}px`)
            .style('top', `-${this.googleMap.getDiv().offsetHeight / 2}px`)
            .attr('width', this.googleMap.getDiv().offsetWidth)
            .attr('height', this.googleMap.getDiv().offsetHeight);
        this.canvasContext = canvas.node().getContext("2d");
        this.canvasContext.translate(this.googleMap.getDiv().offsetWidth / 2, this.googleMap.getDiv().offsetHeight / 2);
        this.colorGradient = this.generateColorGradient();
        let ne = this.mapBounds.getNorthEast(), sw = this.mapBounds.getSouthWest(), mapX1 = sw.lng(), mapX2 = ne.lng(), mapY1 = ne.lat(), kmXStep = this.getDistance(new google.maps.LatLng(mapX1, mapY1), new google.maps.LatLng(mapX2, mapY1)) / this.googleMap.getDiv().offsetWidth;
        this.brushes = this.generateBrushes(map(this.data, function (d) { return Math.round(d.radious); }).keys(), kmXStep);
    }
    draw() {
        let projection = this.overlay.getProjection();
        this.canvasContext.save();
        this.canvasContext.clearRect(-this.googleMap.getDiv().offsetWidth / 2, -this.googleMap.getDiv().offsetHeight / 2, this.googleMap.getDiv().offsetWidth, this.googleMap.getDiv().offsetHeight);
        this.drawCircles(this.canvasContext, this.brushes, projection);
        let image = this.canvasContext.getImageData(0, 0, this.googleMap.getDiv().offsetWidth, this.googleMap.getDiv().offsetHeight);
        this.colorize(image.data, this.colorGradient);
        this.canvasContext.putImageData(image, 0, 0);
        this.canvasContext.restore();
    }
    getDistance(p1, p2) {
        var R = 6378137; // Earth’s mean radius in meter
        var dLat = this.toRad(p2.lat() - p1.lat());
        var dLong = this.toRad(p2.lng() - p1.lng());
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.toRad(p1.lat())) * Math.cos(this.toRad(p2.lat())) *
                Math.sin(dLong / 2) * Math.sin(dLong / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return d / 1000; // returns the distance in meter
    }
    colorize(pixels, gradient) {
        for (var i = 0, len = pixels.length, j; i < len; i += 4) {
            j = pixels[i + 3] * 4; // get gradient color from opacity value
            if (j) {
                pixels[i] = gradient[j];
                pixels[i + 1] = gradient[j + 1];
                pixels[i + 2] = gradient[j + 2];
            }
        }
    }
    generateColorGradient() {
        var grad = {
            0.4: 'blue',
            0.6: 'cyan',
            0.7: 'lime',
            0.8: 'yellow',
            1.0: 'red'
        };
        var canvas = document.createElement("canvas"), ctx = canvas.getContext('2d'), gradient = ctx.createLinearGradient(0, 0, 0, 256);
        canvas.width = 1;
        canvas.height = 256;
        for (var i in grad) {
            gradient.addColorStop(+i, grad[i]);
        }
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 1, 256);
        return ctx.getImageData(0, 0, 1, 256).data;
    }
    drawCircles(canvasContext, projection, brushes) {
        this.data.forEach(dataPoint => {
            canvasContext.globalAlpha = 0.1;
            let pointCoord = projection.fromLatLngToDivPixel(new google.maps.LatLng(dataPoint.latitude, dataPoint.longitude));
            let brush = brushes[dataPoint.radious];
            canvasContext.drawImage(brush.brush, pointCoord.x - brush.radius, pointCoord.y - brush.radius);
        });
    }
    generateBrushes(allRadius, normalizer) {
        let brushes = {};
        allRadius.forEach((brushRadius) => {
            let blur = Math.round((brushRadius * 3 / 4) / normalizer);
            let radius = Math.round((brushRadius / 4) / normalizer);
            let fullRadius = blur + radius;
            let circleCanvas = document.createElement("canvas");
            let ctxCircleCanvas = circleCanvas.getContext('2d');
            circleCanvas.width = circleCanvas.height = fullRadius * 2;
            ctxCircleCanvas.shadowOffsetX = ctxCircleCanvas.shadowOffsetY = fullRadius * 2;
            ctxCircleCanvas.shadowBlur = blur;
            ctxCircleCanvas.shadowColor = 'black';
            ctxCircleCanvas.beginPath();
            ctxCircleCanvas.arc(-fullRadius, -fullRadius, radius, 0, Math.PI * 2);
            ctxCircleCanvas.closePath();
            ctxCircleCanvas.fill();
            brushes[brushRadius] = {
                brush: circleCanvas,
                radius: fullRadius
            };
        });
        return brushes;
    }
    toRad(x) {
        return x * Math.PI / 180;
    }
}
