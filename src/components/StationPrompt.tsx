import React, { Dispatch, SetStateAction, useState } from 'react';
import { log } from 'util';
import { fetchStations, fetchTrains } from '../helpers/ApiCallHelper';
import { responseMapper } from '../mappers/ResponseMapper';
import { Journey } from '../models/Journey';
import Button from './Button';
import DropdownMenu from './Dropdown';
import JourneysList from './JourneysList';

const StationPrompt: () => JSX.Element = () => {
    const [stationFrom, setStationFrom] = useState('');
    const [stationTo, setStationTo] = useState('');
    const [journeyData, setJourneyData] = useState<Journey[]>([]);

    const getTrains = () => {
        return fetchTrains({ stationFrom, stationTo })
            .then(response => responseMapper(response).then(journeys => setJourneyData(journeys)));
        // .then(data => {
        //     console.log(data);
        // });
        //window.open(`https://www.lner.co.uk/travel-information/travelling-now/live-train-times/depart/${stationFrom}/${stationTo}/#LiveDepResults`);
    };

    return (
        <div>
            <DropdownMenu onChange = { setStationFrom }/>
            <DropdownMenu onChange = { setStationTo } />
            <Button onClick = { getTrains } text = { 'Show me the trains' } ></Button>
            <JourneysList journeyData = { journeyData }/>
        </div>
    );
};

export default StationPrompt;