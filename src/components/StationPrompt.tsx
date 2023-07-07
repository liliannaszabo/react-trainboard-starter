import React, {
    useEffect,
    useState,
} from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { fetchStations, fetchTrains } from '../helpers/ApiCallHelper';
import { getLocation, getNearestStation } from '../helpers/LocationHelper';
import { mapResponseToStationList, responseMapper } from '../mappers/ResponseMapper';
import { Journey } from '../models/Journey';
import { Station } from '../models/Station';
import Button from './Button';
import DropdownMenu from './Dropdown';
import JourneysList from './JourneysList';

const StationPrompt: () => JSX.Element = () => {
    const [stationFrom, setStationFrom] = useState<Station>();
    const [stationTo, setStationTo] = useState<Station>();

    const [journeyData, setJourneyData] = useState<Journey[]>([]);
    const [stationsList, setStationsList] = useState<Station[]>([]);

    const [isLoading, setIsLoading] = useState(false);

    const getTrains = () => {
        if(stationFrom && stationTo){
            setIsLoading(true);
            return fetchTrains({ stationFrom, stationTo })
                .then(response => responseMapper(response)
                    .then(journeys => setJourneyData(journeys)))
                .then(e => setIsLoading(false));
        }
    };

    const setNearestLocationAsDeparture = () => {
        getLocation().then(({ latitude, longitude }) => {
            setStationFrom(getNearestStation({ latitude, longitude }, stationsList));
        });
    };

    useEffect(() => {
        fetchStations().then(response => {
            mapResponseToStationList(response).then(formattedStations => {
                setStationsList(formattedStations);
            });
        });
    }

    ,[]);

    return (
        <div>
            <DropdownMenu onChange = { setStationFrom } stationsList = { stationsList } selectedOption = { stationFrom } text = 'Choose deaparture station: ' />
            <DropdownMenu onChange = { setStationTo } stationsList = { stationsList } selectedOption = { stationTo } text = 'Choose arrival station: ' />
            <Button onClick = { getTrains } text = { 'Show me the trains' } ></Button>
            <Button onClick = { setNearestLocationAsDeparture } text = { 'Use my location' } ></Button>
            <div>
                {isLoading?(<Spinner animation = 'border' variant = 'dark'/>):(<JourneysList journeyList = { journeyData }/>)}
            </div>
        </div>
    );
};

export default StationPrompt;