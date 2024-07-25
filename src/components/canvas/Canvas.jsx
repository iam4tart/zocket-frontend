import React, { Component } from 'react';

class Canvas extends Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
        this.captionCanvasRef = React.createRef();
        this.ctaCanvasRef = React.createRef();
        this.backgroundColor = '#0369A1';
        this.captionText = '1 & 2 BHK Luxury Apartments at just Rs.34.97 Lakhs';
        this.ctaText = 'Shop Now';
        this.AdImage = 'https://images.unsplash.com/photo-1721893484306-23d5379b5d9f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    }

    ComponentDidMount() {
        this.drawCanvas();
    }

    drawCanvas() {
        const canvas = this.canvasRef.current;
        const ctx = canvas.getContext('2d');
        const image = new Image()
        const image2 = new Image()
        const image3 = new Image()
        image.onload = () => {
            ctx.drawImage(image, 0, 0);
        }

        image2.onload = () => {
            ctx.drawImage(image2, 0, 0);
        }

        image3.onload = () => {
            ctx.drawImage(image3, 0, 0);
        }

        image.src = 'https://d273i1jagfl543.cloudfront.net/templates/global_temp_landscape_temp_10_Design_Pattern.png';
        image2.src = 'https://d273i1jagfl543.cloudfront.net/templates/global_temp_landscape_temp_10_mask.png';
        image3.src = 'https://d273i1jagfl543.cloudfront.net/templates/global_temp_landscape_temp_10_Mask_stroke.png?random=12345 ';
    }


    render() {
        return (
            <>
                <canvas className='w-56 sm:w-[30rem]'
                    ref={this.canvasRef}
                    width={1080}
                    height={1080}
                    style={{ backgroundColor: `${this.backgroundColor}`, position: 'absolute' }}
                ></canvas>
                <canvas className='w-56 sm:w-[30rem]'
                    ref={this.captionCanvasRef}
                    width={1080}
                    height={1080}
                    style={{ position: 'absolute' }}
                ></canvas>
                <canvas className='w-56 sm:w-[30rem]'
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
