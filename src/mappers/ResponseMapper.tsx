import station from '../components/Station';
import Stations from '../components/Stations';
import { Journey } from '../models/Journey';
import { Station } from '../models/Station';

export const responseMapper = async (response: Response): Promise<Journey[]> => {
    const data = await response.json();
    const journeys: Journey[] = data.outboundJourneys;
    return journeys;
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
