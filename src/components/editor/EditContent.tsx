import React, {useState} from 'react';

export const EditContent: React.FC = () => {
    const [contentText, setContentText] = useState("Treat yourself to a divine Blueberry Cake - INR 900.00!");

    return (
        <div className="relative">
            <input
                value={contentText}
                type="text"
                className="w-full pt-6 pl-3 pb-2 border-2 border-[#c4c4c4] rounded-md placeholder-transparent focus:outline-none"
                // onChange={setContentText}
            />
            <label
                htmlFor="ad-content"
                className="absolute top-1 left-0 mt-4 ml-3 text-gray-500 transform -translate-y-1/2 scale-75 origin-top-left transition-transform duration-300 ease-in-out"
            >
                Ad Content
            </label>
        </div>
    );
};
