export declare class AppHome {
    el: HTMLElement;
    map: any;
    canvas: any;
    projection: any;
    spainProvincesGeoJson: any;
    originalBounds: any;
    pointsLocation: any[];
    componentDidRender(): Promise<void>;
    generateColorGradient(): Uint8ClampedArray;
    colorize(pixels: any, gradient: any): void;
    drawCircles(canvasContext: any, brushes: any): void;
    generateBrushes(allRadius: any, normalizer: any): any;
    getDistance(p1: any, p2: any): number;
    toRad(x: any): number;
    render(): any;
}
