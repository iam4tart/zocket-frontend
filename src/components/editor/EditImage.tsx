import { useState } from 'react';
import { ImageUp } from 'lucide-react';
import useCanvasStore from '../../utils/store';

export const EditImage: React.FC = () => {
    const [fileName, setFileName] = useState<string | null>(null);
    const updateFile = useCanvasStore((state) => state.updateFile);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setFileName(file.name);
            updateFile(file);
        } else {
            setFileName(null);
            updateFile(null);
        }
    };

    return (
        <>
            <label className="flex items-center cursor-pointer text-gray-500 border-2 border-[#c4c4c4] rounded-md py-3 px-4 hover:border-blue-600 focus:border-blue-600">
                <ImageUp className="mr-3 text-blue-600" />
                <input
                    aria-label='ad-creative'
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleFileChange}
                />
                <span>
                    {fileName ? (
                        <span>{fileName}</span>
                    ) : (
                        <>Change the <b>ad creative image</b>. <u className="text-blue-600">select file</u></>
                    )}
                </span>
            </label>
        </>
    );
};
