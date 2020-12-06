import * as NodeGeocoder from 'node-geocoder';
declare const loadAPI: (API_KEY: string) => void;
declare const reverseLookup: (lat: number, lng: number) => Promise<NodeGeocoder.Entry[]>;
export { loadAPI, reverseLookup };
