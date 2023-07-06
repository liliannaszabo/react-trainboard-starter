import { Location } from '../models/Location';
import { Station } from '../models/Station';

export const getLocation = (): Promise<Location> => {
    return new Promise((resolve, reject) => {
        if( navigator.geolocation){
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    resolve({ latitude, longitude });
                },
                (error) => {
                    reject(error.message);
                },
            );
        } else {
            reject('Not able to get location');
        }
    });
};

export const getDistance = (x: number, y: number, x2: number, y2: number) => {
    return Math.sqrt((y-y2)**2 + (x-x2)**2 );
};

export const getNearestStation = (location: Location, stations: Station[]) => {
    let closestDistance = Infinity;
    let closestStation = undefined;
    for(const station of stations) {
        const distance = getDistance(location.latitude,location.longitude,station.latitude,station.longitude);
        if(distance<closestDistance){
            closestDistance = distance;
            closestStation = station;
        }
    }
    return closestStation;
};