import React, { useState } from 'react';
import { log } from 'util';
import { fetchStations, fetchTrains } from '../helpers/ApiCallHelper';
import { mapResponseToJourneys } from '../mappers/mapResponseToJourneys';
import Button from './Button';
import DropdownMenu from './Dropdown';

const StationPrompt: () => JSX.Element = () => {
    const [stationFrom, setStationFrom] = useState('');
    const [stationTo, setStationTo] = useState('');
    const openLink = () => {
        fetchTrains({ stationFrom, stationTo })
            .then(data => data.json().then(d => console.log(d.outboundJourneys)));
        // .then(data => {
        //     console.log(data);
        // });
        //TODO: type the response
        //TODO: type the stations
        //window.open(`https://www.lner.co.uk/travel-information/travelling-now/live-train-times/depart/${stationFrom}/${stationTo}/#LiveDepResults`);
    };

    return (
        <div>
            <DropdownMenu onChange = { setStationFrom }/>
            <DropdownMenu onChange = { setStationTo } />
            <Button onClick = { openLink } text = { 'Show me the trains' } ></Button>
        </div>
    );
};

export default StationPrompt;