import React, { useState } from 'react';
import Button from './Button';
import DropdownMenu from './Dropdown';

const StationPrompt: () => JSX.Element = () => {
    const [stationFrom, setStationFrom] = useState('');
    const [stationTo, setStationTo] = useState('');
    const openLink = () => {
        window.open(`https://www.lner.co.uk/travel-information/travelling-now/live-train-times/depart/${stationFrom}/${stationTo}/#LiveDepResults`);
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