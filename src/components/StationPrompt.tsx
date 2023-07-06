import React, { useEffect, useState } from 'react';
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

    const getTrains = () => {
        if( originStation && destinationStation ){
            return fetchTrains({ originStation: originStation, destinationStation: destinationStation })
                .then(response => responseMapper(response).then(journeys => setJourneyData(journeys)));
        }
    };

    const setNearestLocationAsDeparture = () => {
        getLocation().then(({ latitude, longitude }) => {
            setOriginStation(getNearestStation({ latitude, longitude }, stationsList));
        });
    };

    useEffect(() => {
        const response =  fetchStations().then(response => {
            mapResponseToStationList(response).then(formattedStations => {
                setStationsList(formattedStations);
            });
        });
        
    }

    ,[]);

    return (
        <div>
            <StationSelectDropdownMenu onChange = { setOriginStation } stationsList = { stationsList } selectedOption = { originStation } />
            <StationSelectDropdownMenu onChange = { setDestinationStation } stationsList = { stationsList } selectedOption = { destinationStation }  />
            <Button onClick = { getTrains } text = { 'Show me the trains' } ></Button>
            <Button onClick = { setNearestLocationAsDeparture } text = { 'Use my location' } ></Button>
            <JourneysList journeyData = { journeyData }/>
        </div>
    );
};

export default StationPrompt;