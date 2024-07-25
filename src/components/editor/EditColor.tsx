import { useState } from 'react';
import { SketchPicker, ColorResult } from 'react-color';
import { Plus } from 'lucide-react';
import queue from '../../utils/queue';
import useCanvasStore from '../../utils/store'; // Adjust the import path as needed

class ColorQueue extends queue<string> {}

export const EditColor: React.FC = () => {
  const [showPicker, setShowPicker] = useState(false);
  const [color, setColor] = useState<string>("");
  const [colorState, setColorState] = useState<string>("");
  const [recentColor, setRecentColor] = useState<ColorQueue>(new ColorQueue());

  
  const updateColor = useCanvasStore((state) => state.updateColor);

  const handleColorChange = (color: ColorResult) => {
    setColor(color.hex);
    updateColor(color.hex);
  };

  const handleSwatchColor = () => {
    let swatch = new ColorQueue();
    swatch = Object.assign(recentColor);

    if (color === colorState) {
      return;
    }

    if (Object.keys(recentColor.state).length >= 5) {
      swatch.pop();
      swatch.push(color);
    } else {
      swatch.push(color);
    }

    setRecentColor(swatch);
  };

  const openEyeDropper = async () => {
    if ('EyeDropper' in window) {
      try {
        const eyeDropper = new EyeDropper();
        const { sRGBHex } = await eyeDropper.open();
        setColor(sRGBHex);
        updateColor(sRGBHex);
      } catch (error) {
        console.error("Failed to use EyeDropper API:", error);
        alert('Use Chrome, Edge or Arc to pick color from page.');
      }
    } else {
      console.log('Failed to use EyeDropper API');
    }
  };

  
  const handleColorSelect = () => {
    setShowPicker(false);
    setColorState(color);
    handleSwatchColor();
    updateColor(color); 
  };

  return (
    <>
      <p className="text-gray-500 ml-1 text-sm">Choose Color </p>
      <div className='flex mt-2 '>
        {Object.values(recentColor.state).map((color, index) => (
          <div
            key={index}
            onClick={() => updateColor(color)}
            style={{ backgroundColor: color }}
            className='ml-2 mt-2 w-6 h-6 rounded-full cursor-pointer flex text-center'
          ></div>
        ))}

        <div
          className="ml-2 mt-2 w-6 h-6 rounded-full cursor-pointer flex items-center justify-center text-lg font-bold text-center bg-gray-100 hover:bg-black hover:text-gray-100"
          onClick={() => setShowPicker(!showPicker)}
        >
          <Plus size={20} />
        </div>

        {showPicker && (
          <div className="absolute z-10 mt-2">
            <div
              onClick={handleColorSelect} 
              className="fixed inset-0 z-0"
            />
            <div className="relative z-20">
              <SketchPicker
                color={color}
                onChange={handleColorChange}
                className="transition-opacity duration-300 ease-in-out opacity-100"
              />
              <div
                onClick={openEyeDropper}
                className="shadow-sm w-full bg-white h-10 mt-1 font-mono text-xs text-center cursor-pointer z-20 absolute pickfrompage"
              >
                <p className="pt-3">Pick color from this page</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
