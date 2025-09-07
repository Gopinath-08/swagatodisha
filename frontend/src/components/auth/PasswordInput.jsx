import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PasswordStrengthIndicator from './PasswordStrengthIndicator';

const PasswordInput = ({
    id,
    name,
    value,
    onChange,
    placeholder,
    required = false,
    autoComplete = 'current-password',
    className = '',
    label,
    error,
    showLabel = true,
    showStrengthIndicator = false
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="relative">
            {showLabel && label && (
                <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
                    {label}
                </label>
            )}

            <div className="relative">
                <input
                    id={id}
                    name={name}
                    type={showPassword ? 'text' : 'password'}
                    autoComplete={autoComplete}
                    required={required}
                    value={value}
                    onChange={onChange}
                    className={`w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 placeholder-gray-400 ${className}`}
                    placeholder={placeholder}
                />

                {/* Eye Icon Button */}
                <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-200 focus:outline-none focus:text-gray-600"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                    <motion.div
                        initial={false}
                        animate={{ rotate: showPassword ? 0 : 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {showPassword ? (
                            // Eye Slash Icon (Password Hidden)
                            <svg
                                className="h-5 w-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                                />
                            </svg>
                        ) : (
                            // Eye Icon (Password Visible)
                            <svg
                                className="h-5 w-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                />
                            </svg>
                        )}
                    </motion.div>
                </button>
            </div>

            {/* Password Strength Indicator */}
            {showStrengthIndicator && (
                <PasswordStrengthIndicator password={value} />
            )}

            {error && (
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1 text-sm text-red-600"
                >
                    {error}
                </motion.p>
            )}
        </div>
    );
};

export default PasswordInput;
