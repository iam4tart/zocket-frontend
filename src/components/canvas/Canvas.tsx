import { Component, createRef, RefObject } from 'react';
import { breakString } from '../../utils/breakString';
import { drawRect } from '../../utils/drawRect';

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
  contentCanvasRef: RefObject<HTMLCanvasElement>;
  ctaCanvasRef: RefObject<HTMLCanvasElement>;
  color: string;
  contentText: string;
  ctaText: string;

  constructor(props: CanvasProps) {
    super(props);
    this.canvasRef = createRef();
    this.contentCanvasRef = createRef();
    this.ctaCanvasRef = createRef();
    this.color = '#0369A1';
    this.contentText = '1 & 2 BHK Luxury Apartments at just Rs.34.97 Lakhs';
    this.ctaText = 'Shop Now';
  }

  componentDidMount() {
    this.drawCanvas();
  }

  componentDidUpdate(prevProps: CanvasProps) {
    if (prevProps.info.contentText != this.props.info.contentText) {
      this.writeContentText(this.props.info.contentText);
    }
    
    if (prevProps.info.file != this.props.info.file) {
      this.drawAdImage(this.props.info.file);
    }

    if (prevProps.info.ctaText != this.props.info.ctaText) {
      this.writeCtaText(this.props.info.ctaText);
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

    canvas.style.backgroundColor = this.props.info.color || this.color;
    this.writeContentText(this.props.info.contentText || this.contentText);
    this.writeCtaText(this.props.info.ctaText || this.ctaText);
  }

  drawAdImage = (file: File | null) => {
    const canvas = this.canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.globalCompositeOperation = "source-atop"
    ctx.clearRect(56, 442, 970, 600);

    const image = new Image()
    image.onload = () => {
      ctx.drawImage(image, 56, 442, 970, 600);
    }

    if (file) {
      image.src = URL.createObjectURL(file);
    } else {
      image.src = 'default-image-url';
    }

    ctx.globalCompositeOperation = "source-over"
  }

  writeContentText = (text: string) => {

    const canvas = this.contentCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#FFFFFF';
    ctx.font = '44px Arial';
    let start = 90
    if (text === '') {
      text = this.contentText
    }
    const lines = breakString(text, 31)
    lines.map(line => {
      ctx.fillText(line, 50, start);
      start = start + 50
    })
  }

  writeCtaText = (text: string) => {

    const canvas = this.ctaCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const bgColor = "#000000"
    if (!text) {
      text = this.ctaText
    }
    const lines = breakString(text, 20)

    ctx.font = '30px Arial';
    const text_width = ctx.measureText(lines[0]).width
    const text_height = lines.length * 30
    const width = text_width + 48
    const height = text_height + 48
    drawRect(190, 320, width, height, 20, bgColor, ctx);
    let starty = 320 + (height / 2 + 8)
    const startx = 190 + 24
    ctx.fillStyle = '#ffffff';
    lines.map(line => {
      ctx.fillText(line, startx, starty);
      starty = starty + 30
    })

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
          ref={this.contentCanvasRef}
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
