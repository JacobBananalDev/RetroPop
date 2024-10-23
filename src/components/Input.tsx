import React, { InputHTMLAttributes } from 'react';
import { IconType } from 'react-icons';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: IconType; // Allows passing any icon from react-icons
  error?: string;  // Custom error message
}

const Input: React.FC<InputProps> = ({
  label,
  icon: Icon,
  error,
  className,
  ...props
}) => {
  return (
    <div className="md:flex hidden w-full relative">
      {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}

      <div className="flex items-center bg-white border border-gray-300 rounded-full shadow-sm focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition duration-150 ease-in-out overflow-hidden">
        {Icon && (
          <div className="p-1 bg-gray-100 text-gray-600">
            <Icon size={20} />
          </div>
        )}

        <input
          className={`w-full focus:outline-none bg-transparent ${className}`}
          {...props}
        />
      </div>

      {error && (
        <p className="mt-2 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
