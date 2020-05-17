import { gmapsInit } from "../utils/gmap";
class MyGoogleMapService {
    async gMapsInit(mapReference) {
        await gmapsInit(process.env.GOOGLE_API_KEY);
        if (!this.map) {
            this.map = new google.maps.Map(mapReference, {
                zoom: 5,
                center: new google.maps.LatLng(40.4165000, -3.7025600),
                mapTypeId: google.maps.MapTypeId.TERRAIN
            });
        }
        return this.map;
    }
}
export const GoogleMapService = new MyGoogleMapService();
