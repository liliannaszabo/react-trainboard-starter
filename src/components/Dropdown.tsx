import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Select  from 'react-select';
import { stat } from 'fs';
import { fetchStations } from '../helpers/ApiCallHelper';
import { mapResponseToStationList, responseMapper } from '../mappers/ResponseMapper';
import { DropdownStationOption, StationsListStation } from '../models/Station';
import Button from './Button';

type DropdownProps = {
    onChange: (option: React.SetStateAction<string> ) => void;
}

const DropdownMenu: React.FC<DropdownProps>  = ({ onChange }) => {
    const [selectedOption, setSelectedOption] = useState('');
    const [stationsList, setStationsList] = useState<DropdownStationOption[]>([]);
    const handleSelectChange = (option?: DropdownStationOption | null | undefined) => {
        if(option) {
            console.log(`value ${option.value} label ${option.label}`);
            setSelectedOption(option.value);
            onChange(option.value);
        }
    };
    
    useEffect(() => {
        fetchStations().then(response => mapResponseToStationList(response)
            .then(formattedStations => {
                setStationsList(formattedStations);
            }).then(r => {handleSelectChange(stationsList[0]);}));

    },[]);

    return (
        <div>
            <label htmlFor = "dropdown">Select an option:</label>
            <Select options = { stationsList }
                onChange = { (option: DropdownStationOption | null | undefined) =>  handleSelectChange(option) }/>
        </div>
    );
};

export default DropdownMenu;