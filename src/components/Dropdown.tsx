import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from './Button';

type DropdownProps = {
    onChange;
}
const DropdownMenu: React.FC<DropdownProps>  = ({ onChange }) => {
    const [selectedOption, setSelectedOption] = useState('');
    const handleSelectChange = (event: { target: { value: React.SetStateAction<string>}}) => {
        const option = event.target.value;
        setSelectedOption(option);
        onChange(option);
    };

    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    function openURL() {
        // eslint-disable-next-line quotes
        return `https://www.lner.co.uk/travel-information/travelling-now/live-train-times/depart/EDB/KGX/#LiveDepResults`;

    }

    return (
        <div>
            <label htmlFor = "dropdown">Select an option:</label>
            <select id = "dropdown" value = { selectedOption } onChange = { handleSelectChange }>
                <option value = "">Select</option>
                <option value = "KGX">Kings Cross</option>
                <option value = "CBG">Cambridge</option>
                <option value = "SVG">Stevenage</option>
                <option value = "EDB">Edinburgh Waverley</option>
                <option value = "NOT">Nottingham</option>
            </select>
        </div>
    );
};

export default DropdownMenu;