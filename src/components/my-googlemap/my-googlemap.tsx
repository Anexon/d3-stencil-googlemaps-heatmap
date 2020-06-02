import { Component, Element, h } from "@stencil/core";
import { gmapsInit } from "../utils/gmap";
import { select } from "d3-selection";
import { map } from "d3-collection";

@Component({
  tag: "my-googlemap",
  styleUrl: "my-googlemap.css",
  shadow: true,
})
export class AppHome {
  @Element() el: HTMLElement;

  map: any;
  canvas: any;

  projection: any;
  spainProvincesGeoJson: any;
  originalBounds: any;

  pointsLocation: any[];

  async componentDidRender() {
    await gmapsInit(process.env.GOOGLE_API_KEY);
    this.pointsLocation = await fetch(
      "./assets/datasets/points-location.json"
    ).then((res) => res.json());

    this.map = new google.maps.Map(this.el.shadowRoot.querySelector(".map"), {
      zoom: 5,
      center: new google.maps.LatLng(40.4165, -3.70256),
      mapTypeId: google.maps.MapTypeId.TERRAIN,
    });

    let overlay = new google.maps.OverlayView();

    overlay.onAdd = () => {
      this.originalBounds = this.map.getBounds();
      this.canvas = select(overlay.getPanes().overlayLayer)
        .append("canvas")
        .style("position", "absolute")
        .style("left", `-${this.map.getDiv().offsetWidth / 2}px`)
        .style("top", `-${this.map.getDiv().offsetHeight / 2}px`)
        .attr("width", this.map.getDiv().offsetWidth)
        .attr("height", this.map.getDiv().offsetHeight);

      let ctx = this.canvas.node().getContext("2d");
      ctx.translate(
        this.map.getDiv().offsetWidth / 2,
        this.map.getDiv().offsetHeight / 2
      );

      let colorGradient = this.generateColorGradient();

      let ne = this.originalBounds.getNorthEast(),
        sw = this.originalBounds.getSouthWest(),
        mapX1 = sw.lng(),
        mapX2 = ne.lng(),
        mapY1 = ne.lat(),
        kmXStep =
          this.getDistance(
            new google.maps.LatLng(mapX1, mapY1),
            new google.maps.LatLng(mapX2, mapY1)
          ) / this.map.getDiv().offsetWidth,
        brushes = this.generateBrushes(
          map(this.pointsLocation, function (d) {
            return Math.round(d.radius);
          }).keys(),
          kmXStep
        );

      overlay.draw = () => {
        this.projection = overlay.getProjection();
        ctx.save();
        ctx.clearRect(
          -this.map.getDiv().offsetWidth / 2,
          -this.map.getDiv().offsetHeight / 2,
          this.map.getDiv().offsetWidth,
          this.map.getDiv().offsetHeight
        );

        this.drawCircles(ctx, brushes);
        let image = ctx.getImageData(
          0,
          0,
          this.map.getDiv().offsetWidth,
          this.map.getDiv().offsetHeight
        );
        this.colorize(image.data, colorGradient);
        ctx.putImageData(image, 0, 0);
        ctx.restore();
      };
    };
    overlay.setMap(this.map);
  }

  generateColorGradient() {
    let grad = {
      0.4: "blue",
      0.6: "cyan",
      0.7: "lime",
      0.8: "yellow",
      1.0: "red",
    };

    let canvas = document.createElement("canvas"),
      ctx = canvas.getContext("2d"),
      gradient = ctx.createLinearGradient(0, 0, 0, 256);

    canvas.width = 1;
    canvas.height = 256;

    for (let i in grad) {
      gradient.addColorStop(+i, grad[i]);
    }

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 1, 256);

    return ctx.getImageData(0, 0, 1, 256).data;
  }

  colorize(pixels, gradient) {
    for (let i = 0, len = pixels.length, j; i < len; i += 4) {
      j = pixels[i + 3] * 4; // get gradient color from opacity value
      if (j) {
        pixels[i] = gradient[j];
        pixels[i + 1] = gradient[j + 1];
        pixels[i + 2] = gradient[j + 2];
      }
    }
  }

  drawCircles(canvasContext, brushes) {
    this.pointsLocation.forEach((pointLocation) => {
      canvasContext.globalAlpha = 0.1;
      let pointCoord = this.projection.fromLatLngToDivPixel(
        new google.maps.LatLng(pointLocation.latitude, pointLocation.longitude)
      );
      let brush = brushes[pointLocation.radius];
      canvasContext.drawImage(
        brush.brush,
        pointCoord.x - brush.radius,
        pointCoord.y - brush.radius
      );
    });
  }

  generateBrushes(allRadius, normalizer) {
    let brushes: any = {};
    allRadius.forEach((brushRadius: number) => {
      let blur = Math.round((brushRadius * 3) / 4 / normalizer);
      let radius = Math.round(brushRadius / 4 / normalizer);
      let fullRadius = blur + radius;

      let circleCanvas = document.createElement("canvas");
      let ctxCircleCanvas = circleCanvas.getContext("2d");

      circleCanvas.width = circleCanvas.height = fullRadius * 2;

      ctxCircleCanvas.shadowOffsetX = ctxCircleCanvas.shadowOffsetY =
        fullRadius * 2;
      ctxCircleCanvas.shadowBlur = blur;
      ctxCircleCanvas.shadowColor = "black";

      ctxCircleCanvas.beginPath();
      ctxCircleCanvas.arc(-fullRadius, -fullRadius, radius, 0, Math.PI * 2);
      ctxCircleCanvas.closePath();
      ctxCircleCanvas.fill();

      brushes[brushRadius] = {
        brush: circleCanvas,
        radius: fullRadius,
      };
    });
    return brushes;
  }

  getDistance(p1, p2) {
    let R = 6378137; // Earth’s mean radius in meter
    let dLat = this.toRad(p2.lat() - p1.lat());
    let dLong = this.toRad(p2.lng() - p1.lng());
    let a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.toRad(p1.lat())) *
        Math.cos(this.toRad(p2.lat())) *
        Math.sin(dLong / 2) *
        Math.sin(dLong / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = R * c;
    return d / 1000; // returns the distance in meter
  }

  toRad(x) {
    return (x * Math.PI) / 180;
  }

  render() {
    return (
      <div>
        <div class="map"></div>
      </div>
    );
  }
}
