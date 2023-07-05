import Stations from '../components/Stations';
import { Journey } from '../models/Journey';
import { DropdownStationOption, StationsListStation } from '../models/Station';

export const responseMapper = async (response: Response): Promise<Journey[]> => {
    const data = await response.json();
    const journeys: Journey[] = data.outboundJourneys;
    return journeys;
};

export const mapResponseToStationList = async (response: Response): Promise<DropdownStationOption[]> => {
    const data = await response.json();
    const stations: StationsListStation[] = data.stations;
    const stationsOutput: DropdownStationOption[] = [];
    stations.map((station: StationsListStation) =>
        stationsOutput.push({ label: station.name, value: station.crs }));

    return stationsOutput;
};

//data => data.json().then(d => console.log(d.outboundJourneys)))
//
// .then(response => response.json()
//     .then(jsonData => jsonData.map((station: StationsListStation) =>
//         stations.push({ label: station.name, value: station.crs }))));
