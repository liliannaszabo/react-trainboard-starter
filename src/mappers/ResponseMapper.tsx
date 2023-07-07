import { convertStringToHoursAndMinutes } from '../helpers/dateHelper';
import { Journey, Leg } from '../models/Journey';
import { Station } from '../models/Station';

export const responseMapper = async (response: Response): Promise<Journey[]> => {
    const data = await response.json();
    data.outboundJourneys.map((journey: Journey) => {
        journey.arrivalTimeFormatted = convertStringToHoursAndMinutes(journey.arrivalTime);
        journey.departureTimeFormatted = convertStringToHoursAndMinutes(journey.departureTime);
    });
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

export const getJourneyLegsDestinations = (legs: Leg[]): string => {
    return legs.map(leg => leg.destination.displayName).slice(0,legs.length-1).join(', ');
};

