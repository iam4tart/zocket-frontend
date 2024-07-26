import { EditImage } from './EditImage';
import { Divider } from './Divider';
import { EditContent } from './EditContent';
import { EditCTA } from './EditCTA';
import { EditColor } from './EditColor';
import { PanelBottomClose } from 'lucide-react';

export const EditorArea = ({ toggleFullCanvas }: { toggleFullCanvas: () => void }) => {
    return (
        <div className="w-full h-full flex flex-col justify-between bg-white">
            <div className="w-full h-full flex flex-col bg-white p-6">

                <div className="flex justify-center items-center sm:hidden hover:text-blue-500">
                    <button
                        aria-label='hide-editor'
                        className="flex items-center rounded"
                        onClick={toggleFullCanvas}
                    >
                        <PanelBottomClose />
                    </button>
                </div>

                <div className="mt-10">
                    <p className="font-bold text-center text-xl">Ad Customization</p>
                    <p className="text-gray-500 font-normal text-center mt-2">
                        Customize your Ad and get templates accordingly
                    </p>
                </div>

                <div className="mt-10">
                    <EditImage />
                </div>

                <div className="">
                    <Divider />
                </div>

                <div>
                    <EditContent />
                </div>

                <div className='mt-6'>
                    <EditCTA />
                </div>

                <div className='mt-6'>
                    <EditColor />
                </div>

            </div>
        </div>
    );
};
