import React from 'react'
import { TextFieldInput, TextFieldRoot, TextFieldSlot } from '@radix-ui/themes'
import { Controller } from 'react-hook-form';

interface InputProps {
    control: any;
    name: string;
    label: string;
    placeholder: string;
    rules: any;
    type?: string;
    value?: any;
}

const Input: React.FC<InputProps> = ({ control, name, label, placeholder, rules, type = 'text', value }) => {


    return (

        <>
            <label htmlFor={name}>{label}</label>
            <TextFieldRoot>
                <TextFieldSlot></TextFieldSlot>
                <Controller
                    name={name}
                    control={control}
                    rules={rules}
                    defaultValue={value}
                    render={({ field }) => {
                        return (
                            <TextFieldInput className='ml-5' type={type} placeholder={placeholder} {...field}></TextFieldInput>
                        );
                    }}
                />
            </TextFieldRoot>

        </>
    );
};

export default Input;