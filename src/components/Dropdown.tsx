import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const DropdownMenu: () => JSX.Element = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const handleSelectChange = (event: { target: { value: React.SetStateAction<string>}}) => {
        setSelectedOption(event.target.value);
    };

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
            {selectedOption && <p>Selected option: {selectedOption}</p>}
        </div>
    );
};

export default DropdownMenu;