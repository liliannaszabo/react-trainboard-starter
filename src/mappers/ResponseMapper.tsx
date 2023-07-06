import { Journey } from '../models/Journey';
import { Station } from '../models/Station';

export const responseMapper = async (response: Response): Promise<Journey[]> => {
    const data = await response.json();
    return data.outboundJourneys;
};

export const mapResponseToStationList = async (response: Response): Promise<Station[]> => {
    const data = await response.json();
    const stations: Station[] = data.stations;
    stations.map((station: Station) => {
        station.value = station.crs;
        station.label = station.name;
    });
    return stations;
};

//data => data.json().then(d => console.log(d.outboundJourneys)))
//
// .then(response => response.json()
//     .then(jsonData => jsonData.map((station: StationsListStation) =>
//         stations.push({ label: station.name, value: station.crs }))));
