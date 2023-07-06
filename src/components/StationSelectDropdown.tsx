import React, { useEffect } from 'react';
import Select  from 'react-select';
import { Station } from '../models/Station';

type DropdownProps = {
    onChange: (option: React.SetStateAction<Station | undefined> ) => void;
    stationsList: Station[];
    selectedOption: Station | undefined;
}

const StationSelectDropdownMenu: React.FC<DropdownProps>  = ({ onChange, selectedOption, stationsList }) => {
    const handleSelectChange = (option: Station | null | undefined) => {
        if(option) {
            onChange(option);
        }
    };

    useEffect(() => {
        handleSelectChange(selectedOption);
    }, [selectedOption]);

    return (
        <div>
            <label htmlFor = "dropdown">Select an option:</label>
            <Select options = { stationsList }
                onChange = { (option: Station | null | undefined) =>  handleSelectChange(option) }
                value = { selectedOption }/>
        </div>
    );
};

export default StationSelectDropdownMenu;