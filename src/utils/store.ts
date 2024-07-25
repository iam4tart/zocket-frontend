import {create} from 'zustand';

type State = {
  file: File | null;
  contentText: string;
  ctaText: string;
  color: string
}

type Actions = {
  updateFile: (file: State['file']) => void
  updateContentText: (contentText: State['contentText']) => void
  updateCtaText: (ctaText: State['ctaText']) => void
  updateColor: (color: State['color']) => void
}

const useCanvasStore = create<State & Actions>((set) => ({
  file: null,
  contentText: '',
  ctaText: '',
  color: '',
  updateFile: (file) => set({file: file}),
  updateContentText: (text) => set({contentText: text}),
  updateCtaText: (text) => set({ctaText: text}),
  updateColor: (color) => set({color: color})
}));

export default useCanvasStore;
