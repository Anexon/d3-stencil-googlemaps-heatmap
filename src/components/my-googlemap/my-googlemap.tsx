import { Component, Element, h } from '@stencil/core';
import { gmapsInit } from '../utils/gmap';
import { select } from 'd3-selection';

@Component({
  tag: 'my-googlemap',
  styleUrl: 'my-googlemap.css',
  shadow: true
})
export class AppHome {

  @Element() el: HTMLElement;

  map: any;
  overlay: any;
  canvas: any;
  ctx: any;
  projection: any;
  spainProvincesGeoJson: any;
  originalBounds: any;
  minValue = 5;
  pointsLocations: any[];

  grid;

  brush;
  radius;
  colorGradient;
  
  firstTime = true;

  async componentDidRender(){

    await gmapsInit(process.env.GOOGLE_API_KEY);
    this.pointsLocations =  await fetch("./assets/geojson/points-location.json").then(res => res.json());

    this.map = new google.maps.Map(this.el.shadowRoot.querySelector('.map'), {
        zoom: 5,
        center: new google.maps.LatLng(40.4165000, -3.7025600),
        mapTypeId: google.maps.MapTypeId.TERRAIN
    });

    this.generateBrush();
    this.initializeColorGradient();

    this.overlay = new google.maps.OverlayView();

    this.overlay.onAdd = () => {
        this.originalBounds = this.map.getBounds();
        this.canvas = select(this.overlay.getPanes().overlayLayer)
            .append('canvas')
            .style('position', 'absolute')
            .style('left', `-${this.map.getDiv().offsetWidth / 2}px`)
            .style('top', `-${this.map.getDiv().offsetHeight / 2}px`)
            .attr('width', this.map.getDiv().offsetWidth)
            .attr('height', this.map.getDiv().offsetHeight);

        this.ctx = this.canvas.node().getContext("2d");
        this.ctx.translate(this.map.getDiv().offsetWidth / 2, this.map.getDiv().offsetHeight / 2)

        this.overlay.draw = ()=>{
            this.projection = this.overlay.getProjection();
            this.ctx.save();
            this.ctx.clearRect(-this.map.getDiv().offsetWidth / 2, -this.map.getDiv().offsetHeight / 2, 
            this.map.getDiv().offsetWidth, this.map.getDiv().offsetHeight);

            this.drawCircles();
            let image = this.ctx.getImageData(0, 0, 
                this.map.getDiv().offsetWidth, this.map.getDiv().offsetHeight);
            this.colorize(image.data, this.colorGradient);
            this.ctx.putImageData(image, 0,0);
            // this.updateHeatmapGrid();
            this.ctx.restore();
        };
    }
    this.overlay.setMap(this.map);
  }

  colorize(pixels, gradient){
    for (var i = 0, len = pixels.length, j; i < len; i += 4) {
        j = pixels[i + 3] * 4; // get gradient color from opacity value
        if (j) {
            pixels[i] = gradient[j];
            pixels[i + 1] = gradient[j + 1];
            pixels[i + 2] = gradient[j + 2];
        }
    }
  }

  initializeColorGradient(){
    var grad = {
        0.4: 'blue',
        0.6: 'cyan',
        0.7: 'lime',
        0.8: 'yellow',
        1.0: 'red'
    }

    var canvas = document.createElement("canvas"),
    ctx = canvas.getContext('2d'),
    gradient = ctx.createLinearGradient(0, 0, 0, 256);

    canvas.width = 1;
    canvas.height = 256;

    for (var i in grad) {
        gradient.addColorStop(+i, grad[i]);
    }

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 1, 256);

    this.colorGradient = ctx.getImageData(0, 0, 1, 256).data;
  }

  drawCircles(){
    this.pointsLocations.forEach(extra => {
        this.ctx.globalAlpha = 0.1;
        let pointCoord = this.projection.fromLatLngToDivPixel(new google.maps.LatLng(extra.latitude, extra.longitude));
        this.ctx.drawImage(this.brush, pointCoord.x-10, pointCoord.y-10);
    })
  }

  generateBrush(){
    let blur = 10;
    let radius = 5;
    // create a grayscale blurred circle image that we'll use for drawing points
    let circle = this.brush = document.createElement("canvas");
    let ctxCircle = circle.getContext('2d')
    let r2 = radius + blur;
    this.radius = r2;

    circle.width = circle.height = r2 * 2;

    ctxCircle.shadowOffsetX = ctxCircle.shadowOffsetY = r2 * 2;
    ctxCircle.shadowBlur = blur;
    ctxCircle.shadowColor = 'black';

    ctxCircle.beginPath();
    ctxCircle.arc(-r2, -r2, radius, 0, Math.PI * 2, true);
    ctxCircle.closePath();
    ctxCircle.fill();
  }

  render(){
    return (
      <div>
        <div class="map"></div>
      </div>
    );
  }
}
