import {useState} from 'react';
import { Plus } from 'lucide-react';

export const EditColor: React.FC = () => {
    const [showpicker, setShowPicker] = useState(false);
    
    return (
        <>
            <p className="text-gray-500 ml-1 text-sm">Choose Color</p>
            <div
                className="ml-2 mt-2 w-6 h-6 bg-slate-100 rounded-full cursor-pointer flex items-center justify-center text-lg font-bold text-center"
                onClick={()=>setShowPicker(true)}
            >
                <Plus size={20} />
            </div>
        </>
    );
};
