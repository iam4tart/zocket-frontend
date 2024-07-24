import './App.css';
import { CanvasArea } from "./components/canvas/CanvasArea";
import { EditorArea } from "./components/editor/EditorArea";

function App() {
  return (
    <div className="h-screen flex flex-col sm:flex-row bg-white">
      <div className="flex-1 sm:w-3/5">
        <CanvasArea />
      </div>
      <div className="hidden sm:flex sm:w-2/5 p-2 shadow-md">
        <EditorArea />
      </div>
    </div>
  );
}

export default App;
