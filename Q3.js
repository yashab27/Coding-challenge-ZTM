function colorconverter(color) {
    let concolor;
    if (color[0] === '#') {
        concolor = hexTorgb(color);
    } else if (color[0] === '(') {
        concolor = rgbTohex(color);
    } else {
        return "Invalid color format.Hexcode starts with # and RGB code starts with (";
    }

    function hexTorgb(color) {
        let num = color.slice(1);
        let r = parseInt(num.substring(0, 2), 16);
        let g = parseInt(num.substring(2, 4), 16);
        let b = parseInt(num.substring(4, 6), 16);
        let a = num.length === 8 ? Math.round(parseInt(num.substring(6, 8), 16) / 255) : '';

        return "(" + r + "," + g + "," + b + (a !== '' ? ',' : '') + a + ")";
    }

    function rgbTohex(color) {
        color = color.slice(1, -1).split(',');
        let r = color[0];
        let g = color[1];
        let b = color[2];
        let a = color.length === 4 ? Math.round(color[3] * 255) : '';
        return "#" + numTohex(r) + numTohex(g) + numTohex(b) + (color.length === 4 ? numTohex(a) : '');

    }

    function numTohex(number) {
        let numInhex = Number(number).toString(16);
        return numInhex.length == 1 ? "0" + numInhex : numInhex;
    }
    return concolor;
}