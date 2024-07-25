import { Component, createRef, RefObject } from 'react';

interface CanvasProps {
  info: {
    file: File | null;
    contentText: string;
    ctaText: string;
    color: string;
  };
}

class Canvas extends Component<CanvasProps> {
  canvasRef: RefObject<HTMLCanvasElement>;
  captionCanvasRef: RefObject<HTMLCanvasElement>;
  ctaCanvasRef: RefObject<HTMLCanvasElement>;
  defaultBgColor: string;
  defaultContentText: string;
  defaultCtaText: string;

  constructor(props: CanvasProps) {
    super(props);
    this.canvasRef = createRef();
    this.captionCanvasRef = createRef();
    this.ctaCanvasRef = createRef();
    this.defaultBgColor = '#0369A1';
    this.defaultContentText = '1 & 2 BHK Luxury Apartments at just Rs.34.97 Lakhs';
    this.defaultCtaText = 'Shop Now';
    // this.adImage = 'https://images.unsplash.com/photo-1721893484306-23d5379b5d9f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  }

  componentDidMount() {
    this.drawCanvas();
  }

  componentDidUpdate(prevProps: CanvasProps) {
    // re-draw canvas if color changes
    if (this.props.info.color !== prevProps.info.color) {
      this.drawCanvas();
    }
  }

  drawCanvas() {
    const canvas = this.canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const image = new Image();
    const image2 = new Image();
    const image3 = new Image();

    image.onload = () => {
      ctx.drawImage(image, 0, 0);
    };

    image2.onload = () => {
      ctx.drawImage(image2, 0, 0);
    };

    image3.onload = () => {
      ctx.drawImage(image3, 0, 0);
    };

    image.src = 'https://d273i1jagfl543.cloudfront.net/templates/global_temp_landscape_temp_10_Design_Pattern.png';
    image2.src = 'https://d273i1jagfl543.cloudfront.net/templates/global_temp_landscape_temp_10_mask.png';
    image3.src = 'https://d273i1jagfl543.cloudfront.net/templates/global_temp_landscape_temp_10_Mask_stroke.png?random=12345';

    canvas.style.backgroundColor = this.props.info.color || this.defaultBgColor;
  }

  render() {
    return (
      <>
        <canvas
          className='w-56 sm:w-[30rem]'
          ref={this.canvasRef}
          width={1080}
          height={1080}
          style={{ backgroundColor: this.props.info.color, position: 'absolute' }}
        ></canvas>
        <canvas
          className='w-56 sm:w-[30rem]'
          ref={this.captionCanvasRef}
          width={1080}
          height={1080}
          style={{ position: 'absolute' }}
        ></canvas>
        <canvas
          className='w-56 sm:w-[30rem]'
          ref={this.ctaCanvasRef}
          width={1080}
          height={1080}
          style={{ position: 'absolute' }}
        ></canvas>
      </>
    );
  }
}

export default Canvas;
