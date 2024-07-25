import useCanvasStore from '../../utils/store';
import Canvas from './Canvas';

export const CanvasArea = () => {
    const canvasState = useCanvasStore();

    return (
        <div className="bg-diagonal-stripes w-full h-full flex-1 flex justify-center items-center bg-gray-200 p-16">
          <Canvas info={canvasState}/>
       </div>
    );
  };
  