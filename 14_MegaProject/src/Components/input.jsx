/* eslint-disable react/prop-types */
import React from 'react';
import { useId } from 'react';

const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = '',
    ...props
}, ref) {
    const id = useId();
    return (
        <div className='w-full'>
            {label && 
                <label
                    className='inline-block mb-1 pl-1'
                    htmlFor={id}
                >
                    {label}
                </label>
            }
            <input
                type={type}
                id={id}
                ref={ref}
                className={`block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 ${className}`}
                {...props}
            />
        </div>
    );
})
export default Input;
