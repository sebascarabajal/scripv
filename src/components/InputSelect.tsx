import React, { useState } from 'react';

const SelectInput: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };

    return (
        <select value={selectedOption} onChange={handleChange} >
            <option value="opcion1">600 VIV. LOMAS DE TAFI</option>
            <option value="opcion2">LOMAS SECTOR VI 287 VIV.</option>
            <option value="opcion3">LOMAS SECTOR VII 294 VIV.</option>
            <option value="opcion4">LOMAS SECTOR VIII 346 VIV.</option>
            <option value="opcion5">LOMAS SECTOR IX 282 VIV.</option>
            <option value="opcion6">LOMAS SECTOR X 284 VIV.</option>
            <option value="opcion7">LOMAS SECTOR XI 290 VIV.</option>
            <option value="opcion8">LOMAS SECTOR XII 289 VIV.</option>
            <option value="opcion9">LOMAS SECTOR XIII 287 VIV.</option>
            <option value="opcion10">LOMAS SECTOR XIV 312 VIV.</option>
            <option value="opcion11">LOMAS SECTOR XV 329 VIV.</option>
            <option value="opcion12">LOMAS SECTOR XVI 178 VIV.</option>
            <option value="opcion13">LOMAS SECTOR XV 329 VIV.</option>
            <option value="opcion14">LOMAS SECTOR XVI 178 VIV.</option>
            <option value="opcion15">LOMAS SECTOR XVII 261 VIV.</option>
            <option value="opcion16">LOMAS SECTOR XVIII 226 VIV.</option>
            <option value="opcion17">LOMAS SECTOR XIX 273 VIV.</option>
            <option value="opcion18">LOMAS SECTOR XX 266 VIV.</option>
            <option value="">166 VIV. LOMAS DE TAFI</option>
            <option value="">LOS POCITOS 448 VIV-SEC.A/342V  </option>
        </select>
    );
};

export default SelectInput;