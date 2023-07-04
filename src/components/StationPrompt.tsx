import React, { useState } from 'react';
import Button from './Button';
import DropdownMenu from './Dropdown';

const StationPrompt: () => JSX.Element = () => {
    const [stationFrom, setStationFrom] = useState('');
    const [stationTo, setStationTo] = useState('');
    function openLink() {
        return 'r';
    }

    return (
        <div>
            <DropdownMenu />
            <DropdownMenu />
            <Button onClick = { openLink } text = { 'Show me the trains' } ></Button>
        </div>
    );
};

export default StationPrompt;