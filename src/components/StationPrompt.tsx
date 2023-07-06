import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { log } from 'util';
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

    const getTrains = () => {
        if(stationFrom && stationTo){
            return fetchTrains({ stationFrom, stationTo })
                .then(response => responseMapper(response).then(journeys => setJourneyData(journeys)));
        }
    };

    const setNearestLocationAsDeparture = () => {
        getLocation().then(({ latitude, longitude }) => {
            setStationFrom(getNearestStation({ latitude, longitude }, stationsList));
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
            <DropdownMenu onChange = { setStationFrom } stationsList = { stationsList } selectedOption = { stationFrom } />
            <DropdownMenu onChange = { setStationTo } stationsList = { stationsList } selectedOption = { stationTo }  />
            <Button onClick = { getTrains } text = { 'Show me the trains' } ></Button>
            <Button onClick = { setNearestLocationAsDeparture } text = { 'Use my location' } ></Button>
            <JourneysList journeyData = { journeyData }/>
        </div>
    );
};

export default StationPrompt;