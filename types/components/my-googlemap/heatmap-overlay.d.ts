export declare class HeatmapOverlay {
    data: any;
    private mapBounds;
    private canvasContext;
    private colorGradient;
    private brushes;
    private googleMap;
    private overlay;
    constructor(data: any);
    onAdd(googleMap: any, overlay: any): void;
    draw(): void;
    private getDistance;
    private colorize;
    private generateColorGradient;
    private drawCircles;
    private generateBrushes;
    private toRad;
}
