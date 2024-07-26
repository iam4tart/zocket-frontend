export const breakStringIntoArray = (inputString: string, maxCharactersPerLine: number): string[] => {
    const words = inputString.split(' ');
    const lines: string[] = [];
    let currentLine = '';

    for (const word of words) {
        if (currentLine.length + word.length <= maxCharactersPerLine) {
            currentLine += word + ' ';
        } else {
            lines.push(currentLine.trim());
            currentLine = word + ' ';
        }
    }

    lines.push(currentLine.trim());
    return lines;
}

export const drawRoundedRect = (x: number, y: number, width: number, height: number, radius: number, bgColor: string, ctx: CanvasRenderingContext2D): void => {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.arcTo(x + width, y, x + width, y + height, radius);
    ctx.arcTo(x + width, y + height, x, y + height, radius);
    ctx.arcTo(x, y + height, x, y, radius);
    ctx.arcTo(x, y, x + width, y, radius);
    ctx.closePath();
    ctx.fillStyle = bgColor;
    ctx.fill();
    ctx.stroke();
}
