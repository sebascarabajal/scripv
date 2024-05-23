import React from 'react';
import { Control, Controller, FieldValues, RegisterOptions } from 'react-hook-form';

interface InputRadixProps {
  name: string;
  label: string;
  control: any;
  rules?: RegisterOptions;
  value?: string;
}

const InputRadix: React.FC<InputRadixProps> = ({ name, label, control, rules, value }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Controller
        name={name}
        control={control}
        rules={rules}
        defaultValue={value}
        render={({ field }) => (
          <select {...field}>
            <option value="486">600 VIV. LOMAS DE TAFI</option>
            <option value="618">LOMAS SECTOR VI 287 VIV.</option>
            <option value="619">LOMAS SECTOR VII 294 VIV.</option>
            <option value="620">LOMAS SECTOR VIII 346 VIV.</option>
            <option value="621">LOMAS SECTOR IX 282 VIV.</option>
            <option value="622">LOMAS SECTOR X 284 VIV.</option>
            <option value="623">LOMAS SECTOR XI 290 VIV.</option>
            <option value="624">LOMAS SECTOR XII 289 VIV.</option>
            <option value="625">LOMAS SECTOR XIII 287 VIV.</option>
            <option value="626">LOMAS SECTOR XIV 312 VIV.</option>
            <option value="627">LOMAS SECTOR XV 329 VIV.</option>
            <option value="628">LOMAS SECTOR XVI 178 VIV.</option>
            <option value="627">LOMAS SECTOR XV 329 VIV.</option>
            <option value="628">LOMAS SECTOR XVI 178 VIV.</option>
            <option value="629">LOMAS SECTOR XVII 261 VIV.</option>
            <option value="630">LOMAS SECTOR XVIII 226 VIV.</option>
            <option value="631">LOMAS SECTOR XIX 273 VIV.</option>
            <option value="632">LOMAS SECTOR XX 266 VIV.</option>
            <option value="692">166 VIV. LOMAS DE TAFI</option>
            <option value="382">LOS POCITOS 448 VIV-SEC.A/342V  </option>
          </select>
        )}
      />
    </div>
  );
}

export default InputRadix;