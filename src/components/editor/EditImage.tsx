import { ImageUp } from 'lucide-react';

export const EditImage = () => {
    return (
        <>
            <label className="flex items-center cursor-pointer text-gray-500 border-2 border-[#c4c4c4] rounded-md py-3 px-4">
                <ImageUp className="mr-3 text-blue-500" />
                <input type="file" className="hidden" accept="image/*" />
                <span>
                    Change the <b>ad creative image</b>. <u className="text-blue-500">select file</u>
                </span>
            </label>
        </>
    )
}