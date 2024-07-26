export const breakString = (input: string, maxCharactersPerLine: number): string[] => {
    const words = input.split(' ');
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
