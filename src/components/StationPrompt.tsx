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
import JourneysList from './JourneysList';
import StationSelectDropdownMenu from './StationSelectDropdown';

const StationPrompt: () => JSX.Element = () => {

    const [originStation, setOriginStation] = useState<Station>();
    const [destinationStation, setDestinationStation] = useState<Station>();
    const [journeyData, setJourneyData] = useState<Journey[]>([]);
    const [stationsList, setStationsList] = useState<Station[]>([]);

    const [isLoading, setIsLoading] = useState(false);

    const getTrains = () => {
        if( originStation && destinationStation ){
            setIsLoading(true);
            return fetchTrains({ originStation: originStation, destinationStation: destinationStation })
                .then(response => responseMapper(response).then(journeys => setJourneyData(journeys)))
                .then(e => setIsLoading(false));
        }
    };

    const setNearestLocationAsDeparture = () => {
        getLocation().then(({ latitude, longitude }) => {
            setOriginStation(getNearestStation({ latitude, longitude }, stationsList));
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
            <StationSelectDropdownMenu onChange = { setOriginStation } stationsList = { stationsList } selectedOption = { originStation } text = 'Select origin station'/>
            <StationSelectDropdownMenu onChange = { setDestinationStation } stationsList = { stationsList } selectedOption = { destinationStation } text = 'Select destination station'  />
            <Button onClick = { getTrains } text = { 'Show me the trains' } ></Button>
            <Button onClick = { setNearestLocationAsDeparture } text = { 'Use my location' } ></Button>
            <div>
                {isLoading?(<Spinner animation = 'border' variant = 'dark'/>):(<JourneysList journeyList = { journeyData }/>)}
            </div>
        </div>
    );
};

export default StationPrompt;