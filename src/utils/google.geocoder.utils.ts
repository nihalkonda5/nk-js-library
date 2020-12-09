import * as NodeGeocoder from 'node-geocoder';

let nodeGeocoder: NodeGeocoder.Geocoder;

const loadAPI = (API_KEY: string) => {
    nodeGeocoder = NodeGeocoder({
        provider: 'google',
        apiKey: API_KEY,
        formatter: null
    });
}

const reverseLookup = (lat: number, lng: number) => {
    return nodeGeocoder.reverse({ lat, lon: lng });
}

export {
    loadAPI,
    reverseLookup
}