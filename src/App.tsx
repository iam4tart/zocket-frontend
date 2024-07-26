import { useState } from 'react';
import './App.css';
import { CanvasArea } from "./components/canvas/CanvasArea";
import { EditorArea } from "./components/editor/EditorArea";
import { PanelBottomOpen } from 'lucide-react';

function App() {
  const [isEditorVisible, setIsEditorVisible] = useState(true);

  const toggleFullCanvas = () => {
    setIsEditorVisible(!isEditorVisible);
  };

  return (
    <div className="h-screen flex flex-col sm:flex-row bg-white">
      <div className={`flex-1 ${!isEditorVisible ? 'w-full' : 'sm:w-3/5'}`}>
        <CanvasArea />
      </div>
      <div className={`sm:flex sm:w-2/5 p-2 shadow-md ${!isEditorVisible ? 'hidden' : ''}`}>
        <EditorArea toggleFullCanvas={toggleFullCanvas} />
      </div>
      {!isEditorVisible && (
        <div className='sm:hidden absolute bottom-4 left-4 hover:text-blue-500'>
        <button
          aria-label='show-editor'
          className="rounded-md bg-white p-1"
          onClick={toggleFullCanvas}
        >
           <PanelBottomOpen/>
        </button>
        </div>
      )}
    </div>
  );
}

export default App;
