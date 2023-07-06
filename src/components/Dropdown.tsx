import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Select  from 'react-select';
import { stat } from 'fs';
import { fetchStations } from '../helpers/ApiCallHelper';
import { responseMapper } from '../mappers/ResponseMapper';
import {  Station } from '../models/Station';
import Button from './Button';

type DropdownProps = {
    onChange: (option: React.SetStateAction<Station | undefined> ) => void;
    stationsList: Station[];
    selectedOption: Station | undefined;
}

const DropdownMenu: React.FC<DropdownProps>  = ({ onChange, selectedOption, stationsList }) => {
    const handleSelectChange = (option?: Station | null | undefined) => {
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

export default DropdownMenu;