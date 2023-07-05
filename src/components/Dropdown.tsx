import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Select  from 'react-select';
import Button from './Button';

type DropdownProps = {
    onChange: (option: React.SetStateAction<string> ) => void;
}

interface StationOption {
    value: string;
    label: string;
}

const DropdownMenu: React.FC<DropdownProps>  = ({ onChange }) => {
    const [selectedOption, setSelectedOption] = useState('');
    const handleSelectChange = (option?: StationOption | null | undefined) => {
        if(option){
            console.log(`value ${option.value} label ${option.label}`);
            setSelectedOption(option.value);
            onChange(option.value);
        }
    };

    const stations = [
        { label: 'Kings Cross', value: 'KGX' },
        { label: 'Cambridge', value: 'CBG' },
        { label: 'Stevenage', value: 'SVG' },
        { label: 'Edinburgh Waverley' , value: 'EDB' },
        { label: 'Nottingham', value: 'NOT' },
    ];

    return (
        <div>
            <label htmlFor = "dropdown">Select an option:</label>
            <Select options = { stations } 
                onChange = { (option: StationOption | null | undefined) =>  handleSelectChange(option) }/>
        </div>
    );
};

export default DropdownMenu;