import React, { useEffect } from 'react';
import Select  from 'react-select';
import { Station } from '../models/Station';

type DropdownProps = {
    onChange: (option: React.SetStateAction<Station | undefined> ) => void;
    stationsList: Station[];
    selectedOption: Station | undefined;
    text: string;
}

const StationSelectDropdownMenu: React.FC<DropdownProps>  = ({ onChange, selectedOption, stationsList, text }) => {
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
            <label htmlFor = "dropdown">{ text }</label>
            <Select options = { stationsList }
                onChange = { (option: Station | null | undefined) =>  handleSelectChange(option) }
                value = { selectedOption }/>
        </div>
    );
};

export default StationSelectDropdownMenu;