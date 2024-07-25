import React, { useState } from 'react';

export const EditCTA: React.FC = () => {
    const [ctaText, setCtaText] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCtaText(e.target.value);
    };

    return (
        <div className="relative">
            <input
                value={ctaText}
                type="text"
                className="w-full pt-6 pl-3 pb-2 border-2 border-[#c4c4c4] rounded-md placeholder-transparent focus:outline-none hover:border-blue-500 focus:border-blue-500"
                onChange={handleChange}
            />
            <label
                htmlFor="cta"
                className="absolute top-1 left-0 mt-4 ml-3 text-gray-500 transform -translate-y-1/2 scale-75 origin-top-left transition-transform duration-300 ease-in-out"
            >
                Call To Action
            </label>
        </div>
    );
};
